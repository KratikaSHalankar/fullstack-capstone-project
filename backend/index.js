const app = require("./app");
const natural = require("natural"); // REQUIRED

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});