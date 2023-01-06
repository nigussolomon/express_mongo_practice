module.exports = function (app, db) {
  const model = require("../models/course")(db);
  app.get("/courses", (req, res) => {
    model.find({}, function (err, cs) {
      if (err) {
        res.send({ Success: false, error: handleError(err) });
      } else {
        res.send({ Success: true, data: cs });
      }
    });
  });

  app.get("/course", (req, res) => {
    const course_name = req.query.cname;
    model.findOne({ course_name: course_name }, function (err, std) {
      if (err) {
        res.send({ Success: false, error: handleError(err) });
      } else {
        res.send({ Success: true, data: std });
      }
    });
  });

  app.post("/courses/new", (req, res) => {
    model.create(req.body, function (err, std) {
      if (err) {
        res.send({ Success: false, error: handleError(err) });
      } else {
        res.send({ Success: true, data: std });
      }
    });
  });

  app.put("/course", (req, res) => {
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

  app.delete("/course", (req, res) => {
    const id = req.query._id;
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
