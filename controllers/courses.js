module.exports = function (app, db, service) {
  const model = require("../models/course")(db);
  app.get("/courses", (req, res) => {
    service.getAll(model, res);
  });

  app.get("/course", (req, res) => {
    service.getOne(model, res, { _id: req.query._id });
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
