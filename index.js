const express = require("express");

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static('./'))
app.use(require("./api/routes"))

app.listen(3000, () => console.log("server listen"));