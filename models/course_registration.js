module.exports = function (mongoose) {
  const cs = mongoose.model(
    "CourseRegistration",
    {
      registration_date: { type: Date },
      registration_status: { type: Boolean },
      student_id: { type: String },
      course_id: { type: String },
    },
    "CourseRegistrations"
  );

  return cs;
};
