let http = require("http");

let server = http.createServer((req, res) => {
  console.log("hello i am server");
  res.end(
    "SERVER NE RESPONSE BHEJ DIYA and infinite loop mai nhi fasa , agar apan response nhi denge toh browser request bhejta rehega and infinite loop mai fas jayega and web pr kuch nhi dikhega",
  );
});

server.listen(3000, () => {
  console.log("server is running on port 3000  ");
});
