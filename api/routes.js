const routes = require('express').Router();
const fs = require("fs");

function readFile(path, cb, ...args) {
    fs.readFile(path, "utf8", function(err, content) {
        if(err) {
            throw err;
        }

        if(cb) {
            cb(content, ...args);
            return;
        }
        return content;
    });
}

function writeFile(path, content, cb, ...args) {
    fs.writeFile(path, content, function(err, content) {
        if(err) {
            throw err;
        }

        if(cb) {
            cb(content, ...args);
            return;
        }
        return content;
    });
}

routes.get("/get",(req, res) => {
    const path = "./data/contatos.json"
    readFile(path, (content, res) => res.send(JSON.parse(content)), res)
});

routes.post("/insert", (req, res) => {
    const path = "./data/contatos.json"
    readFile(path, (content) => {

        const contentJson = JSON.parse(content);
        contentJson.contatos.push(req.body);

        writeFile(path, JSON.stringify(contentJson));
        res.send({"ok": true})
    });
});

routes.get("/remove", (req, res) => {
    const path = "./data/contatos.json"
    readFile(path, (content) => {

        const contentJson = JSON.parse(content);
        const contentFilter = contentJson.contatos.filter(contato => contato.id != req.query.id);
        
        writeFile(path, JSON.stringify({contatos:contentFilter}) );
        res.send({"ok": true})
    })
});

module.exports = routes;