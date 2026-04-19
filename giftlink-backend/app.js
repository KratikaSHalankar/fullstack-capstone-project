const express = require('express');
const app = express();

const searchRoutes = require('./routes/searchRoutes');

app.use('/api/search', searchRoutes);

module.exports = app;
