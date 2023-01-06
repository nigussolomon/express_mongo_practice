module.exports = function (mongoose) {
  const stds = mongoose.model(
    "Student",
    {
      first_name: { type: String },
      last_name: { type: String },
      section: { type: Number },
    },
    "Students"
  );

  return stds
};
