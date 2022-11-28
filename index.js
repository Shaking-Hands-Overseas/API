#!/usr/bin node
const express = require('express');
const app = express();
const PORT = process.env.PORT;
//const mysql = require('mysql'); // Not in use at the moment

//Json files
var status = require('../Variables/status.json')
var Finger = require('../Variables/Finger.json')

app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(
    PORT,
    () => console.log(`it's alive in on http://localhost:${PORT}`)
)

app.get('/', (req, res) => {
    res.status(200).send({
        "welcome": 'Shaking Hands Overseas'
    })
});

//var auth = require("./auth");
//app.use("/", auth);

app.post('/servo', (req, res) => {
    Info = req.body;
    status["s1"] = Info["s1"];
    status["s2"] = Info["s2"];
    status["s3"] = Info["s3"];
    status["s4"] = Info["s4"];
    status["s5"] = Info["s5"];
    res.status(200).send(status)
});

app.post('/custom', (req, res) => {
    custom = req.body;
    Finger["0"] = custom["0"];
    Finger["1"] = custom["1"];
    Finger["2"] = custom["2"];
    Finger["3"] = custom["3"];
    Finger["4"] = custom["4"];
    res.status(200).send( Finger )
})

app.get('/reciever', (req, res) => {
    res.status(200).send({
        "s1": status["s1"], 
        "s2": status["s2"], 
        "s3": status["s3"], 
        "s4": status["s4"], 
        "s5": status["s5"]
    })
});