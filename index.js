import dotenv from "dotenv";
import express from "express";
import * as azur from "./src/config/azur.js";
import allRoutes from "./src/routes/all.routes.js";
import * as db from "./src/config/db.js";

dotenv.config();

const app = express();
db.dbConnection();

app.use(express.json());
app.use("/api/v1/", allRoutes);

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("✅ API شغالة على http://localhost:" + port);
  azur.startReading();
});