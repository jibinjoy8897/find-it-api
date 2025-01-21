import express from "express";
const app = express();
import cors from "cors";
import connectMongoDB from"./db/connectMongoDb.js";

app.use(cors());

const PORT = process.env.PORT || 5000;

connectMongoDB();

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello from our server! Hi");
});
