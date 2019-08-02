const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("./app/public"));
app.get("/", function(req, res) {
  res.sendFile(path.resolve(`${__dirname}/app/index.html`));
});
app.listen(4040);

const frontends = express();
frontends.get("/:frontend", function(req, res) {
  res.sendFile(
    path.resolve(`${__dirname}/frontends/public/${req.params.frontend}.js`)
  );
});
frontends.listen(3030);
