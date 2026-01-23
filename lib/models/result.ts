import { Schema, model, models } from "mongoose";

const ResultSubjectSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    marks: { type: Number, required: true },
    grade: { type: String, trim: true },
  },
  { _id: false }
);

const ResultSchema = new Schema(
  {
    student: { type: Schema.Types.ObjectId, ref: "User", required: true },
    schoolId: { type: String, required: true, trim: true },
    examTitle: { type: String, required: true, trim: true },
    year: { type: Number, required: true },
    grade: { type: String, required: true, trim: true },
    section: { type: String, trim: true },
    roll: { type: String, trim: true },
    subjects: { type: [ResultSubjectSchema], default: [] },
    totalMarks: { type: Number },
    gpa: { type: Number },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

ResultSchema.index({ schoolId: 1, year: -1 });
ResultSchema.index({ student: 1, year: -1 });

const Result = models.Result || model("Result", ResultSchema);

export default Result;
