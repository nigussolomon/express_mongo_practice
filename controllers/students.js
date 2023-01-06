module.exports = function (app, db) {
  const model = require("../models/student")(db)
  app.get("/students/all", (req, res) => {
    model.find({}, function (err, std) {
      if (err) {
        res.send({ Success: false, error: handleError(err) });
      } else {
        res.send({ Success: true, data: std });
      }
    });
  });

  app.get("/students", (req, res) => {
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
    const first_name = req.body.fname;
    const last_name = req.body.lname;
    const section = req.body.sec;
    model.create(
      { first_name: first_name, last_name: last_name, section: section },
      function (err, std) {
        if (err) {
          res.send({ Success: false, error: handleError(err) });
        } else {
          res.send({ Success: true, data: std });
        }
      }
    );
  });

  app.put("/students", (req, res) => {
    const first_name = req.query.fname;
    const last_name = req.body.lname;
    model.update(
      { first_name: first_name },
      { $set: { last_name: last_name } },
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
