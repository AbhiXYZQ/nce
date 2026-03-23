"use server";

import dbConnect, { Visitor } from "@/lib/db";

export async function incrementVisitorCount() {
  try {
    await dbConnect();
    
    let record = await Visitor.findOneAndUpdate(
      { name: "total_visits" },
      { $inc: { count: 1 } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    
    // Set a baseline if the record was just created (optional)
    if (record.count === 1) {
      record.count = 45231;
      await record.save();
    }
    
    return record.count;
  } catch (err) {
    console.error("Critical: Visitor counter failed", err.message);
    // Return a hardcoded fallback to prevent crashing the RSC/Server Action context
    return 45231;
  }
}
