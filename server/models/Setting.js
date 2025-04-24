import { Schema,model } from "mongoose";

const settingSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    theme: {
      type: String,
      enum: ["light", "dark"],
      default: "light",
    },
    language: {
      type: String,
      default: "en",
    },
    notificationsEnabled: {
      type: Boolean,
      default: true,
    },
    reminderTime: {
      type: String,
      default: "08:00",
    },
  },
  { timestamps: true }
);


const Setting = model("Setting", settingSchema);

export default Setting;