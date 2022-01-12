const express = require('express');

const APP = express();

APP.use(express.json());

APP.use(require('./src/routes/routes.js'));


APP.listen(5000, ()=>{
    console.log("Server on port: 5000")
})
