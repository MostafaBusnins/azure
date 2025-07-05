import mongoose from "mongoose";

const fcmTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
    },
  },
  { timestamps: true }
);

const FcmTokenModel = mongoose.model("FcmToken", fcmTokenSchema);

export default FcmTokenModel;
