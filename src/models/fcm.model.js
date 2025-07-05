const mongoose = require("mongoose");

const fcmTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
    },
  },
  { timestamps: true }
);

const FcmTokenModel = mongoose.model("FcmToken", fcmTokenSchema);

module.exports = FcmTokenModel;
