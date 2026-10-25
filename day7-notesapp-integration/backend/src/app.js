const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");
const notesRoute = require("./routes/notes.routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.send("ho gaya");
});

app.use("/notes", notesRoute);

module.exports = app;
