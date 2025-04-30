import express from "express";
import cors from "cors";
import "dotenv/config";
import http from "http";
import { Server } from "socket.io";
import songRouter from "./routes/songRoute.js";
import albumRouter from "./routes/albumRoute.js";
import userRouter from "./Routes/userRoute.js";
import chatRouter from "./Routes/chatRoute.js";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

// App config
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 4000;

// Connect to database and cloudinary
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// Initialize routes
app.use("/api/song", songRouter);
app.use("/api/album", albumRouter);
app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);

// Root endpoint
app.get("/", (req, res) => res.send("API Working"));

// Socket.IO setup
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Handle incoming messages
  socket.on("sendMessage", (message) => {
    io.emit("receiveMessage", message); // Broadcast the message to all connected clients
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Start the server
server.listen(port, () => console.log(`Server started on port ${port}`));