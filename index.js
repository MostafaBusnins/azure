require("dotenv").config();
const express = require("express");
const { startReading } = require("./src/config/azur");
const allRoutes = require("./src/routes/all.routes");
const { dbConnection } = require("./src/config/db");

const app = express();
dbConnection()
app.use(express.json());
app.use("/api/v1/" ,allRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`✅ API شغالة على http://localhost:${port}`);
  startReading(); 
});