module.exports = function (mongoose) {
    const cs = mongoose.model(
      "Course",
      {
        course_code: { type: String },
        course_name: { type: String },
        credit_hour: { type: Number },
      },
      "Courses"
    );
  
    return cs
  };
  