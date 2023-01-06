module.exports = function (app, db) {
  const model = require("../models/student")(db);
  app.get("/students", (req, res) => {
    model.find({}, function (err, std) {
      if (err) {
        res.send({ Success: false, error: handleError(err) });
      } else {
        res.send({ Success: true, data: std });
      }
    });
  });

  app.get("/student", (req, res) => {
    const first_name = req.query.fname;
    model.findOne({ first_name: first_name }, function (err, std) {
      if (err) {
        res.send({ Success: false, error: handleError(err) });
      } else {
        res.send({ Success: true, data: std });
      }
    });
  });

  app.post("/students/new", (req, res) => {
    model.create(req.body, function (err, std) {
      if (err) {
        res.send({ Success: false, error: handleError(err) });
      } else {
        res.send({ Success: true, data: std });
      }
    });
  });

  app.put("/student", (req, res) => {
    const id = req.query._id;
    model.update({ _id: id }, { $set: req.body }, function (err, std) {
      if (err) {
        res.send({ Success: false, error: handleError(err) });
      } else {
        let message = "Updated Succesfully";
        if (std.modifiedCount <= 0) {
          message = "Nothing to update";
        }
        res.send({ Success: true, msg: message });
      }
    });
  });

  app.delete("/student", (req, res) => {
    const id = req.query.id;
    model.deleteOne({ _id: id }, function (err, std) {
      if (err) {
        res.send({ Success: false, error: handleError(err) });
      } else {
        let message = "Deleted Succesfully";
        if (std.deletedCount <= 0) {
          message = "Nothing to delete";
        }
        res.send({ Success: true, msg: message });
      }
    });
  });
};
