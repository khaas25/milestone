var express = require("express");
var cors = require("cors");
var app = express();
var port = 8080;
// var bcrypt = require("bcrypt");
app.use(express.json());
app.use(cors());
require("./DB/Conn");
app.listen(port, () => {
  console.log("API is running on port: " + port);
});
