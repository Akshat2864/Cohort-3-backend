const express = require("express");
const userRouter = require("./routes/user.route");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.get("/", (req, res) => {
  res.send("ye browser pr dikhega");
});

app.use("/user", userRouter);

module.exports = app;
