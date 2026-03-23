import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let cached = globalThis.mongoose;

if (!cached) {
  cached = globalThis.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// ─── VISITOR SCHEMA ────────────────────────────────────────────────────────
const VisitorSchema = new mongoose.Schema({
  name: { type: String, default: "total_visits" },
  count: { type: Number, default: 0 },
});

export const Visitor = mongoose.models.Visitor || mongoose.model("Visitor", VisitorSchema);
export default dbConnect;
