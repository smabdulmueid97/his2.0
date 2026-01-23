import { Schema, model, models } from "mongoose";

export type UserRole = "student" | "teacher" | "admin";

const UserSchema = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      required: true,
    },
    schoolId: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    phone: { type: String, trim: true },
    grade: { type: String, trim: true },
    section: { type: String, trim: true },
    guardianName: { type: String, trim: true },
    designation: { type: String, trim: true },
    subject: { type: String, trim: true },
    fingerprintId: { type: String, trim: true },
    passwordHash: { type: String, required: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

UserSchema.index({ role: 1, schoolId: 1 }, { unique: true });
UserSchema.index({ fingerprintId: 1 }, { unique: true, sparse: true });

const User = models.User || model("User", UserSchema);

export default User;
