const path = require("path");
const express = require("express");
const app = express();
const PORT = 3001;

app.get("/api", (req, res) => {
  res.json({
    message: "Hello there! Starting a new app for a long term targets",
  });
});

app.listen(PORT || process.env.PORT, function () {
  console.log("Server is listening on port 3001. Ready to accept requests!");
});

// For Deployment

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
