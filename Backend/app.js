const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    success: 1,
    message: "This Api is working",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
