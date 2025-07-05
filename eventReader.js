// const { EventHubConsumerClient } = require("@azure/event-hubs");

// // بيانات الاتصال (بدل القيم دي بقيمك من Azure Portal)
// const connectionString = "Endpoint=sb://ihsuprodblres093dednamespace.servicebus.windows.net/;SharedAccessKeyName=iothubowner;SharedAccessKey=iGq1uvcNSXtdmLLygl9/GnmYcdzDqHdvNAIoTC9L9+U=;EntityPath=iothub-ehub-rasbperry4-66018001-f7e9ab0a9b"; // من Shared Access Policies > iothubowner
// const eventHubName = "iothub-ehub-rasbperry4-66018001-f7e9ab0a9b"; // من Built-in Endpoints
// const consumerGroup = "$Default";

// let latestData = null;

// const startReading = async () => {
//   const client = new EventHubConsumerClient(consumerGroup, connectionString, eventHubName);

//   console.log("🔄 بدء الاستماع للبيانات من Azure IoT Hub...");

//   await client.subscribe({
//     processEvents: async (events, context) => {
//       for (const event of events) {
//         console.log("📥 بيانات مستلمة:", event.body);
//         latestData = event.body;
//       }
//     },
//     processError: async (err) => {
//       console.error("❌ خطأ أثناء قراءة البيانات:", err.message);
//     }
//   });
// };

// const getLatestData = () => latestData;

// module.exports = { startReading, getLatestData };
