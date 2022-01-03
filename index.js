const express = require("express");
const app = express();

express.static("./", express.urlencoded("utf-8"));

app.get("/", express.static("./"))

app.listen(3000, () => console.log("server listen"));