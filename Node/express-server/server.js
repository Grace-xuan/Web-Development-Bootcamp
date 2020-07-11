//jshint eversion:6

/*
 $ node server.js     // need restart whenever changes are made.
 $ nodemon server.js  // it monitors for changes and auto restart.  
*/
const express = require("express");


/*
express().listen(3000, function() {
  console.log("Server Started");
});
*/

const port = 4000;
// the PORT can be any, localhost:PORT is the home page "/"
const app = express();
app.listen(port, function() {
  console.log("Server Started on PORT " + port + ".");
});

app.get("/", function(req, res){
  // req: request, res: response
  console.log(req);
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("contact me at ...@...");
});
