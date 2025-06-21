import express from "express";
import cors from "cors";
import router from "./app/modules/Router";
import Config from "./app/Config";
import mongoose from "mongoose";
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(router);
app.get("/", (req, res) => {
  res.send({ success: true, message: "server Is running" });
});
app.listen(Config.port, () => {
  console.log(`Server Is running ${PORT}`);
});

async function Server() {
  try {
    await mongoose.connect(Config.database_url!);
    console.log(`✅Server is running${PORT}`);
  } catch (error) {
    console.log(`✅Server is running${error}`);
  }
}
Server();
