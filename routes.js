const express = require("express");

//ALL API VERSIONS: 
var V1 = require("./v1/main_v1");

module.exports = function(app) {
    app.use(express.json());
    
    app.use("/1/", V1);
}
