const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./config')(mongoose)
require('./controllers/students')(app, mongoose)
require('./controllers/courses')(app, mongoose)
require('dotenv').config()



app.listen(process.env.PORT, () => console.log("Server is running"));