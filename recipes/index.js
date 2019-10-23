var express = require("express");
var app = express();
var path = require("path");
const morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

function sendViewMiddleware(req, res, next) {
  res.sendView = function(view) {
    return res.sendFile(__dirname + "/views/" + view);
  };
  next();
}

app.use(sendViewMiddleware);
app.use(morgan("dev"));

var recipeRouter = require("./routes/recipe");

// viewed at http://localhost:8080
app.get("/", function(req, res) {
  res.sendView("index.html");
});

app.use("/recipe", recipeRouter);

// viewed at http://localhost:8080/submit_recipe
app.post("/submit_recipe", function(req, res) {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.listen(8080);
console.log("server on http://localhost:8080");

//Set up default mongoose connection
var mongoDB = "mongodb://127.0.0.1/feedMeRight";
mongoose.connect(
  mongoDB,
  { useNewUrlParser: true }
);

console.log("db connection on mongodb://127.0.0.1");

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
