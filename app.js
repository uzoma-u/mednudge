
// import express
const express = require("express");
// initialising express app
const app = express();




app.use(express.static("public"));


















// export app to be used in other files
module.exports = app;

