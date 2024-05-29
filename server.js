import express from "express";
import connectedToDb from "./src/config/connectedToDb.js";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./src/middleware/error.js";

dotenv.config();

// Connection To Db
connectedToDb();

// Init the Server
const server = express();

server.use(express.json());

const PORT = process.env.PORT || 3000;

// Error Handler Middleware
app.use(notFound);
app.use(errorHandler);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
