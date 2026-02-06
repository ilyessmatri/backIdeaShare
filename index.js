const express = require("express");
const ConnectDB = require("./Config/ConnectDB");
const userRouter = require("./Router/User");
const PostRouter = require("./Router/Post");

const cors = require("cors");

const app = express();

app.use(
  cors({
    origin:
      "https://6985c2e8272b43341db94cf5--cheery-malasada-c02510.netlify.app",
    credentials: true,
  })
);

require("dotenv").config();

ConnectDB();

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/Post", PostRouter);

app.listen(
  process.env.port,
  console.log(`Server is running on the port ${process.env.port}`)
);
