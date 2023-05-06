/*
 *   https://www.section.io/engineering-education/build-nextjs-with-mongodb-and-deploy-on-vercel/
 *   - Rose Waitherero
 *   The tutorial above highly influenced the following code
 */

import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.DB_NAME;

if (!MONGODB_URI) {
  throw new Error("Define the MONGODB_URI environmental variable");
}

if (!MONGODB_DB) {
  throw new Error("Define the MONGODB_DB environmental variable");
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {

  if (cachedClient && cachedDb) {
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    let client = new MongoClient(MONGODB_URI, opts);
    await client.connect();
    let db = client.db(MONGODB_DB);

    cachedClient = client;
    cachedDb = db;

    return {
      client: cachedClient,
      db: cachedDb,
    };
  } catch (error) {
    throw new Error("Failed to connect to MongoDB");
  }
}
