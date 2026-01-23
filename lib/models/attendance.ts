import { Schema, model, models } from "mongoose";

const AttendanceSchema = new Schema(
  {
    student: { type: Schema.Types.ObjectId, ref: "User", required: true },
    schoolId: { type: String, required: true, trim: true },
    fingerprintId: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["present", "absent"],
      default: "present",
    },
    method: { type: String, enum: ["fingerprint"], default: "fingerprint" },
    recordedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

AttendanceSchema.index({ recordedAt: -1 });

const Attendance = models.Attendance || model("Attendance", AttendanceSchema);

export default Attendance;
