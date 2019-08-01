const express = require("express");
const path = require("path");

const app = express();
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/public/index.html"));
});

app.listen(4040);
