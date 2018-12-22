

var express = require("express");
var parser = require("body-parser");
var path = require("path");


var app = express();


var port = process.env.port || 8080;


app.use(parser.urlencoded({ extended: true }));

app.use(parser.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(port, function() {
  console.log("Listening on " + port);
});
