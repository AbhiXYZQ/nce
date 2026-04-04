"use server";

import dbConnect, { Visitor } from "@/lib/db";
import fs from "fs";
import path from "path";

export async function incrementVisitorCount() {
  let fallbackCount = 45231;
  const dataFilePath = path.join(process.cwd(), 'visitor_data.json');

  try {
    // 1. Try to use MongoDB
    await dbConnect();
    
    let record = await Visitor.findOneAndUpdate(
      { name: "total_visits" },
      { $inc: { count: 1 } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    
    // Set a baseline if the record was just created (optional)
    if (record.count === 1) {
      record.count = fallbackCount;
      await record.save();
    }
    
    return record.count;
  } catch (err) {
    console.warn("MongoDB connection failed, falling back to local file counter.");
    
    // 2. Use a local file visitor counter as a fallback
    try {
      if (fs.existsSync(dataFilePath)) {
        const fileData = fs.readFileSync(dataFilePath, 'utf8');
        const parsed = JSON.parse(fileData);
        if (parsed && typeof parsed.count === 'number') {
          fallbackCount = parsed.count;
        }
      }
      
      fallbackCount += 1;
      fs.writeFileSync(dataFilePath, JSON.stringify({ count: fallbackCount }), 'utf8');
      
      return fallbackCount;
    } catch (fsErr) {
      console.error("Local file tracking also failed:", fsErr.message);
      return 45231; // Ultimate fallback
    }
  }
}
