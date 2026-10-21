const express = require("express");
const app = express();
let port = 3000;

//middleware for accepting json data
app.use(express.json());

let users = [];

//create - POST

app.post("/create", (req, res) => {
  let body = req.body;

  users.push(body);

  res.send("users saved successfully");
});

// get - READ
app.get("/", (req, res) => {
  res.send(users);
});

//put/patch - UPDATE
app.put("/update/:id", (req, res) => {
  let { id } = req.params;

  let {name} = req.body ;

  let updatedUser = users.map((val) =>
    val.id === id ? {...val, name} : val,
  );
  res.send(updatedUser);
});

//delete - delete
app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;

  let usersData = users.filter((val) => val.id !== id);
  users = usersData;

  res.send("users deleted successfully");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
