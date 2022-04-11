const express = require('express');
var router = express.Router();

const app = express();

//Json files
var status = require('../Variables/status.json')
var Finger = require('../Variables/Finger.json')
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

router.post('/custom', (req, res) => {
    custom = req.body;
    Finger["0"] = custom["F1"];
    Finger["1"] = custom["F2"];
    Finger["2"] = custom["F3"];
    Finger["3"] = custom["F4"];
    Finger["4"] = custom["F5"];
    res.status(200).send( Finger )
})
router.post('/buttons', (req, res) => {
    but = req.body;
    buttons["b1"] = but["b1"];
    buttons["b2"] = but["b2"];
    res.status(200).send( buttons )
})

router.get('/receiver', (req, res) => {
    res.status(200).send({
        "s1": status[Finger["0"]], 
        "s2": status[Finger["1"]], 
        "s3": status[Finger["2"]], 
        "s4": status[Finger["3"]], 
        "s5": status[Finger["4"]], 
        "b1": buttons["b1"],
        "b2": buttons["b2"]
    })
});

module.exports = router;