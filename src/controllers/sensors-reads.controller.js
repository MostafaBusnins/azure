const { getLatestData } = require("../config/index");

exports.sendReadsSensorsController = async (req, res) => {
  const data = getLatestData();

  if (!data) {
    return res.status(404).json({
      success: false,
      message: "لا توجد بيانات حتى الآن",
    });
  }

  res.status(200).json({
    success: true,
    data,
  });
};