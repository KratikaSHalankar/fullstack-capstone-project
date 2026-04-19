const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../config/db');

// GET ALL GIFTS
router.get('/', async (req, res) => {
  const db = await connectToDatabase();
  const gifts = await db.collection('gifts').find().toArray();
  res.json(gifts);
});

// GET SINGLE GIFT BY ID
router.get('/:id', async (req, res) => {
  const db = await connectToDatabase();

  const gift = await db.collection('gifts').findOne({
    _id: req.params.id
  });

  res.json(gift);
});

module.exports = router;
