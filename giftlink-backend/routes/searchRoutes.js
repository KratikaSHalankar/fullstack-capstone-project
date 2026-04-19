const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../config/db');

router.get('/api/search', async (req, res) => {
  const { category } = req.query;

  const db = await connectToDatabase();

  const results = await db.collection('gifts').find({
    category: category
  }).toArray();

  res.json(results);
});

module.exports = router;
