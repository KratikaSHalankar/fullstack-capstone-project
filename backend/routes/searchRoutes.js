const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("../config/db");

// Filter by category
router.get("/", async (req, res) => {
  const { category } = req.query;

  const db = await connectToDatabase();
  const items = await db
    .collection("items")
    .find({ category: category })
    .toArray();

  res.json(items);
});

module.exports = router;