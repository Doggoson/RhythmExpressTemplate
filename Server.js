const express = require("express");
const app = express();
const path = require("path");

app.use("/js", express.static(path.join(__dirname, "src", "js")));
app.use("/css", express.static(path.join(__dirname, "src", "css")));

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/src/html/Round.html');
});

app.listen(8080);
