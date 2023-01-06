require('dotenv').config()
module.exports = function (mongoose) {
  mongoose.set("strictQuery", true);
  const conn = mongoose
    .connect(process.env.HOST, {
      dbName: process.env.DB_NAME,
    })
    .then(() => console.log("Succesfully Connected to MongoDB"))
    .catch((error) => console.log(error));
};
