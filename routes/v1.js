const express = require('express');
var router = express.Router();

const app = express();

//Json files
var status = require('../Variables/status.json')
var Finger = require('../Variables/Finger.json')

router.post('/servo', (req, res) => {
    Info = req.body;
    status["s1"] = Info["s1"];
    status["s2"] = Info["s2"];
    status["s3"] = Info["s3"];
    status["s4"] = Info["s4"];
    status["s5"] = Info["s5"];
    status["s6"] = Info["s6"];
    status["s7"] = Info["s7"];
    res.status(200).send(status)
});

router.post('/custom', (req, res) => {
    custom = req.body;
    Finger["0"] = custom["F1"];
    Finger["1"] = custom["F2"];
    Finger["2"] = custom["F3"];
    Finger["3"] = custom["F4"];
    Finger["4"] = custom["F5"];
    Finger["5"] = custom["F6"];
    Finger["6"] = custom["F7"];
    res.status(200).send( Finger )
})

router.get('/receiver', (req, res) => {
    res.status(200).send({
        "s1": status[Finger["0"]], 
        "s2": status[Finger["1"]], 
        "s3": status[Finger["2"]], 
        "s4": status[Finger["3"]], 
        "s5": status[Finger["4"]], 
        "s6": status[Finger["5"]],
        "s7": status[Finger["6"]]
    })
});

module.exports = router;