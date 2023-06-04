import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  enrolledDepartment: {
    type: String,
    required: true,
  },
  enrollmentDate: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("studentModel", studentSchema);
