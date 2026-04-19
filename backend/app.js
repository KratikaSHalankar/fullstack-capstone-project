const express = require("express");
const giftRoutes = require("./routes/giftRoutes");
const searchRoutes = require("./routes/searchRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use(giftRoutes);
app.use("/api/search", searchRoutes); // REQUIRED
app.use(authRoutes);

module.exports = app;