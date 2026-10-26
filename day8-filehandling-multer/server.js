const app = require("./src/app");
// require("dotenv").config();

let PORT = 3000;
// process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`backend server running..... on port ${PORT}`);
});
