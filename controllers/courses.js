module.exports = function (app, db) {
  const model = require("../models/course")(db);
  app.get("/courses/all", (req, res) => {
    model.find({}, function (err, cs) {
      if (err) {
        res.send({ Success: false, error: handleError(err) });
      } else {
        res.send({ Success: true, data: cs });
      }
    });
  });

  app.get("/courses", (req, res) => {
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
    const course_code = req.body.ccode;
    const course_name = req.body.cname;
    const credit_hour = req.body.ch;
    model.create(
      {
        course_code: course_code,
        course_name: course_name,
        credit_hour: credit_hour,
      },
      function (err, std) {
        if (err) {
          res.send({ Success: false, error: handleError(err) });
        } else {
          res.send({ Success: true, data: std });
        }
      }
    );
  });

  app.put("/courses", (req, res) => {
    const course_code = req.query.ccode;
    const course_name = req.body.cname;
    model.update(
      { course_code: course_code },
      { $set: { course_name: course_name } },
      function (err, std) {
        if (err) {
          res.send({ Success: false, error: handleError(err) });
        } else {
          let message = "Updated Succesfully";
          if (std.modifiedCount <= 0) {
            message = "Nothing to update";
          }
          res.send({ Success: true, msg: message });
        }
      }
    );
  });

  app.delete("/students", (req, res) => {
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
