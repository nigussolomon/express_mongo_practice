const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./db")(mongoose, config);
const service = require("./services/db.services");
require("./controllers/students")(app, mongoose, service);
require("./controllers/courses")(app, mongoose, service);
require("./controllers/course_registrations")(app, mongoose, service);

app.get("/", (req, res) =>{
  res.send("WELCOME TO THE EXPRESS API")
})

app.listen(config.PORT, () =>
  console.log("Server is running"),
  console.log(`Open on your browser: http://localhost:${config.PORT}`)
);
