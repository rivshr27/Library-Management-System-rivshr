import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import bookRoutes from "./routes/books.js";
import transactionRoutes from "./routes/transactions.js";
import categoryRoutes from "./routes/categories.js";

/* App Config */
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

/* Middlewares */
app.use(express.json());
app.use(cors());

/* API Routes */
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/categories", categoryRoutes);

/* MongoDB Connection */
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Connection successful event
mongoose.connection.on("connected", () => {
  console.log("MongoDB connection established successfully");
});

// Connection error event
mongoose.connection.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

// Connection disconnected event
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB connection disconnected");
});

app.get("/", (req, res) => {
  res.status(200).send("Welcome to LibraryApp");
});

/* Port Listening In */
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
