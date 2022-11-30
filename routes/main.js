const express = require('express');
const path = require('path');
var router = express.Router();
router.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/pages/Main.html'))
});

module.exports = router;