const { EventHubConsumerClient } = require("@azure/event-hubs");

const connectionString = process.env.CONNECTION_STRING;
const eventHubName = process.env.EVENT_HUB_NAME;
const consumerGroup = "$Default";

let latestData = null;

const startReading = async () => {
  try {
    const client = new EventHubConsumerClient(consumerGroup, connectionString, eventHubName);

    console.log("🔄 بدأ الاستماع من Azure IoT Hub...");

    await client.subscribe({
      processEvents: async (events, context) => {
        for (const event of events) {
          console.log("📥 بيانات مستلمة:", event.body);
          latestData = event.body;
        }
      },
      processError: async (err) => {
        console.error("❌ خطأ أثناء قراءة البيانات:", err.message);
      }
    });
  } catch (error) {
    console.error("❌ فشل الاتصال بـ Azure:", error.message);
  }
};

const getLatestData = () => latestData;

module.exports = {
  startReading,
  getLatestData,
};