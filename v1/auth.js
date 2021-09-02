const express = require('express');

const app = express();

const mysql = require('mysql');
var mysqlconfig = require('../Variables/mysqlconfig.json');

var connection = mysql.createConnection(mysqlconfig);
connection.connect();


app.post('/login', (req, res) => {
    body = req.body;
    email = body["email"];
    passwd = body["passwd"];
    connection.query(`SELECT personID FROM User WHERE username = "${email}" AND passwd = "${passwd}"`, (err, results) => {
        if (err) {
            res.status(401).send('Invalid Credentials')
        };
        res.status(200).send('Connected');
    });
})

app.post('/register', (req, res) => {
    body = req.body;
    email = body["email"];
    passwd = body["passwd"];
    connection.query(`SELECT personID FROM User WHERE username = "${email}" AND passwd = "${passwd}"`, (err, results) => {
        if (err) {
            res.status(401).send('Invalid Credentials')
        };
        res.status(200).send('Connected');
    });
})

module.exports = app;