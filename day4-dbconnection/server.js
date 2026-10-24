require("dotenv").config();
const app = require("./src/app")

let port = process.env.port;


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
