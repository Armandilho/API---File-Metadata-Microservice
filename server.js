const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.listen(3000, () => {
  console.log("Conectou-se na porta 3000!");
});

app.get("/", (req, res) => res.sendFile("index.html"));
