import express, { json } from "express";
const app = express();
import cors from "cors";
import connectMongoDB from "./db/connectMongoDb.js";
import accessoryRoutes from "./routes/accessoryRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

connectMongoDB();

app.use("/api/accessory", accessoryRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
