const FcmTokenModel = require("../../models/fcm.model");

const createFcmToken = async (req, res) => {
  const { fcmToken } = req.body;
  if (!fcmToken) {
    return res.status(400).json({
      success: false,
      message: "يرجي ادخال ال fcm token",
    });
  }

  try {
    const deleteIfExist = await FcmTokenModel.findOneAndDelete({
      token: fcmToken,
    });
    const created = await FcmTokenModel.create({
      token: fcmToken,
    });

    return res.status(201).json({
      success: true,
      message: "تم حفظ ال fcm token بنجاح",
      data: created,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "حدث خطأ أثناء حفظ ال fcm token",
      error: error.message,
    });
  }
};
module.exports = {
    createFcmToken,
  };