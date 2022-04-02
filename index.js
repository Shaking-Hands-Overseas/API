#!/usr/bin node
const express = require('express');
const app = express();
//const PORT = process.env.PORT;
const PORT = 8080;
//const mysql = require('mysql'); // Not in use at the moment

// IMPORT ALL THE ROUTES
require("./routes")(app);

const LOGGER = function(req, res, next){
    next()
}

app.use(LOGGER)
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
