const express = require("express");
const app = express();
var multer = require("multer");
var upload = multer({});

app.use(express.static(__dirname + "/public"));

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT);

app.get("/", (req, res) => res.sendFile("index.html"));

app.post("/fileanalyse", upload.single("upfile"), (req, res) => {
  const archive = req.file;
  if (archive == undefined) {
    res.sendStatus(406);
  }
  res.json({
    name: archive.originalname,
    type: archive.mimetype,
    size: archive.size
  });
});
