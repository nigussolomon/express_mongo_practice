const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('./config')(mongoose)
require('./controllers/students')(app, mongoose)




app.listen(3000, () => console.log("Server is running"));