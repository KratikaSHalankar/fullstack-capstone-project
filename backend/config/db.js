const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

let db;

async function connectToDatabase() {
  if (!db) {
    await client.connect(); // REQUIRED
    db = client.db("giftlink");
  }
  return db;
}

module.exports = { connectToDatabase };