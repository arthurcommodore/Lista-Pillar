const routes = require('express').Router();
const fs = require("fs");

routes.get("/contatos",(req, res) => {
    fs.readFile("./data/contatos.json", "utf8", function(err, content) {
        if(err) {
            throw err;
        }
        res.send(JSON.parse(content));
    })
})

routes.post("/insert", (req, res) => {

    fs.readFile("./data/contatos.json", "utf8", function(err, content) {
        if(err) {
            throw err;
        }
        const contentJson = JSON.parse(content);

        contentJson.contatos.push(req.body)

        fs.writeFile("./data/contatos.json",  JSON.stringify(contentJson), function(err, content) {
            if(err) {
                throw err;
            }

            res.send({status: "ok"})
        });
    });
})

module.exports = routes;