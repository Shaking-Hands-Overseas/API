const express = require('express');
var router = express.Router();

const app = express();

//Json files
var status = require('../Variables/status.json')
var buttons = require('../Variables/Buttons.json')

router.post('/servo', (req, res) => {
    Info = req.body;
    status["s1"] = Info["s1"];
    status["s2"] = Info["s2"];
    status["s3"] = Info["s3"];
    status["s4"] = Info["s4"];
    status["s5"] = Info["s5"];
    res.status(200).send(status)
});
router.post('/buttons', (req, res) => {
    but = req.body;
    buttons["b1"] = but["b1"];
    buttons["b2"] = but["b2"];
    res.status(200).send( buttons )
})

router.get('/receiver', (req, res) => {
    res.status(200).send({
        "s1": status["s1"], 
        "s2": status["s2"], 
        "s3": status["s3"], 
        "s4": status["s4"], 
        "s5": status["s5"], 
        "b1": buttons["b1"],
        "b2": buttons["b2"]
    })
});

module.exports = router;