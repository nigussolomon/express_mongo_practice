module.exports = function (mongoose, config) {
  mongoose.set("strictQuery", true);
  const conn = mongoose
    .connect(config.DB_HOST, {
      dbName: config.DB_NAME,
    })
    .then(() => console.log("Succesfully Connected to MongoDB"))
    .catch((error) => console.log(error));
};
