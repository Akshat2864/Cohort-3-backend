const express = require("express");
const connectDb = require("./config/db");
const notesRoute = require("./routes/notes.routes");
const notesModel = require("./models/notes.model");
const app = express();

app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.send("ho gaya");
});



app.use("/notes", notesRoute);





module.exports = app;
