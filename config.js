module.exports = function (mongoose) {
  mongoose.set("strictQuery", true);
  const conn = mongoose
    .connect("mongodb://localhost:27017", {
      dbName: "SampleDB",
    })
    .then(() => console.log("Succesfully Connected to MongoDB"))
    .catch((error) => console.log(error));
};
