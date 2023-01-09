module.exports = function (app, db, service) {
  const model = require("../models/course_registration")(db);
  app.get("/registrations", (req, res) => {
    service.getAll(model, res);
  });

  app.get("/registration", (req, res) => {
    service.getOne(model, res, { _id: req.query._id });
  });

  app.post("/registrations/new", (req, res) => {
    service.create(model, res, req.body);
  });

  app.put("/registration", (req, res) => {
    service.update(model, res, req);
  });

  app.delete("/registration", (req, res) => {
    service.deleteOne(model, res, req);
  });
};
