import { Schema, model, models } from "mongoose";

const ContactMessageSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    subject: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
    status: { type: String, default: "new" },
  },
  { timestamps: true }
);

const ContactMessage =
  models.ContactMessage || model("ContactMessage", ContactMessageSchema);

export default ContactMessage;
