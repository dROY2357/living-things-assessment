let express = require("express");
let app = express();
let fs = require("fs");
const cors = require("cors");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});
app.options("http://localhost:8080/", cors());
app.get("/", function (req, res) {
  fs.readFile(
    "../data/lightson.new_energySaving_interview_qn_1213.json",
    "utf8",
    function (err, data) {
      res.send(data);
    }
  );
});

let server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Listening now at http://%s:%s", host, port);
});
