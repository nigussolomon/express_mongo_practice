module.exports = function (app, db) {
  const model = require("../models/course")(db);
  const service = require("../services/db.services");
  app.get("/courses", (req, res) => {
    service.getAll(model, res);
  });

  app.get("/course", (req, res) => {
    service.getOne(model, res, { course_name: req.query.cname });
  });

  app.post("/courses/new", (req, res) => {
    service.create(model, res, req.body);
  });

  app.put("/course", (req, res) => {
    service.update(model, res, req);
  });

  app.delete("/course", (req, res) => {
    service.deleteOne(model, res, req);
  });
};
