var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.listen(3000, function() {
  console.log("Conectou-se na porta 3000!");
});

app.get("/", (req, res) => res.sendFile("index.html"));
