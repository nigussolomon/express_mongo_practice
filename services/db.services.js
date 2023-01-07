function getAll(model, res) {
  model.find({}, function (err, std) {
    if (err) {
      res.send({ Success: false, error: handleError(err) });
    } else {
      res.send({ Success: true, data: std });
    }
  });
}

function getOne(model, res, query) {
  model.findOne(query, function (err, std) {
    if (err) {
      res.send({ Success: false, error: handleError(err) });
    } else {
      res.send({ Success: true, data: std });
    }
  });
}

function create(model, res, query) {
  model.create(query, function (err, std) {
    if (err) {
      res.send({ Success: false, error: handleError(err) });
    } else {
      res.send({ Success: true, data: std });
    }
  });
}

function update(model, res, req) {
  model.updateOne(
    { _id: req.query._id },
    { $set: req.body },
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
}

function deleteOne(model, res, req) {
  model.deleteOne({ _id: req.query._id }, function (err, std) {
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
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteOne
};
