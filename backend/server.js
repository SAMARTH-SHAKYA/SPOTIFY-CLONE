const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db/db.js");
const userRouter = require("./Routes/User.js");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log("app is running at port", port);
});
