const express = require("express");
const app = express();
var multer = require("multer");
var upload = multer({});

app.use(express.static(__dirname + "/public"));

app.listen(3000, () => {
  console.log("Conectou-se na porta 3000!");
});

app.get("/", (req, res) => res.sendFile("index.html"));

app.post("/fileanalyse", upload.single("upfile"), (req, res, next) => {
  const archive = req.file;
  res.json({
    name: archive.originalname,
    type: archive.mimetype,
    size: archive.size
  });
});
