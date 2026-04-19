const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("../config/db");

// GET all items
router.get("/api/gifts", async (req, res) => {
  const db = await connectToDatabase();
  const items = await db.collection("items").find().toArray();
  res.json(items);
});

// GET item by ID
router.get("/api/gifts/:id", async (req, res) => {
  const db = await connectToDatabase();
  const item = await db.collection("items").findOne({
    id: parseInt(req.params.id)
  });
  res.json(item);
});

module.exports = router;