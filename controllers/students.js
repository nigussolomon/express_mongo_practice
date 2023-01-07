module.exports = function (app, db) {
  const model = require("../models/student")(db);
  const service = require("../services/db.services");
  app.get("/students", (req, res) => {
    service.getAll(model, res);
  });

  app.get("/student", (req, res) => {
    service.getOne(model, res, { first_name: req.query.fname });
  });

  app.post("/students/new", (req, res) => {
    service.create(model, res, req.body);
  });

  app.put("/student", (req, res) => {
    service.update(model, res, req);
  });

  app.delete("/student", (req, res) => {
    service.deleteOne(model, res, req);
  });
};
