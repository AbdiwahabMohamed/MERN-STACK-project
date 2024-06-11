import express from "express";
import connectedToDb from "./src/config/connectedToDb.js";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./src/middleware/error.js";
import authRoute from "./src/routes/authRoute.js";
import usersRoute from "./src/routes/userRoute.js";
import postsRoute from "./src/routes/postsRoute.js";
import commentsRoute from "./src/routes/commentsRoute.js";
import categoriesRoute from "./src/routes/categoriesRoute.js";

dotenv.config();

// Connection To Db
connectedToDb();

// Init the Server
const server = express();

server.use(express.json());

// Cors Policy
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/comments", commentsRoute);
app.use("/api/categories", categoriesRoute);

// Error Handler Middleware
app.use(notFound);
app.use(errorHandler);

// Running The Server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
