const express = require("express");
const app = express();
app.listen(3000, () => console.log("Server is running"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const conn = mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "SampleDB",
  })
  .then(() => console.log("Succesfully Connected to MongoDB"))
  .catch((error) => console.log(error));

const stds = mongoose.model(
  "Student",
  {
    first_name: { type: String },
    last_name: { type: String },
    section: { type: Number },
  },
  "Students"
);

stds.find({}, function (err, std) {
  if (err) {
    console.log(handleError(err));
  } else {
    console.log(std);
  }
});

app.get("/students", (req, res) => {
	const first_name = req.query.fname
  stds.findOne({first_name: first_name}, function (err, std) {
    if (err) {
      res.send({ 'Success': false,'error': handleError(err)});
    } else {
      res.send({'Success': true,'data': std});
    }
  });
});

app.post("/students/new", (req, res) => {
	const first_name = req.body.fname
	const last_name = req.body.lname
	const section = req.body.sec
  stds.create({first_name: first_name, last_name: last_name, section: section}, function (err, std) {
    if (err) {
      res.send({ 'Success': false,'error': handleError(err)});
    } else {
      res.send({'Success': true,'data': std});
    }
  });
});

app.put("/students", (req, res) => {
	const first_name = req.query.fname
	const last_name = req.body.lname
  stds.update({first_name: first_name}, {$set: {last_name: last_name}}, function (err, std) {
    if (err) {
      res.send({ 'Success': false,'error': handleError(err)});
    } else {
      res.send({'Success': true,'msg': std});
    }
  });
});
