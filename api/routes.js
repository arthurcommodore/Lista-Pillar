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
    const path = "./data/contatos.json";
    readFile(path, (content, res) => res.send(JSON.parse(content)), res);
});

routes.post("/insert", (req, res) => {
    const path = "./data/contatos.json";
    readFile(path, (content) => {

        const obj = JSON.parse(content);
        const contatos = obj.contatos
        const newContato = {id: contatos.length + 1 ,...req.body}

        contatos.push(newContato);

        writeFile(path, JSON.stringify(obj));
        res.send({"ok": true})
    });
});

routes.get("/remove", (req, res) => {
    const path = "./data/contatos.json";
    readFile(path, (content) => {

        const contentJson = JSON.parse(content);
        const contentFilter = contentJson.contatos.filter(contato => contato.id != req.query.id);
        const objSave = JSON.stringify({contatos:contentFilter})
        
        writeFile(path, objSave);
        res.send({"ok": true})
    });
});

routes.post("/update", (req, res) => {
    const path = "./data/contatos.json";

    readFile(path, content => {

        const contentJson = JSON.parse(content);
        const contentFilter = contentJson.contatos.filter(contato => contato.id != req.body.id);

        contentFilter.push(req.body)
        const objSave = JSON.stringify({contatos:contentFilter})

        writeFile(path, objSave);
        res.send({"ok": true})
    })
})

module.exports = routes;