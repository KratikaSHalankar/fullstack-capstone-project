const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/gifts', (req, res) => {
  res.json([
    { name: "Sofa", category: "Living Room" },
    { name: "Lamp", category: "Bedroom" }
  ]);
});

const PORT = process.env.PORT || 3060;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});