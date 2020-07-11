const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var operator = "";
const port = 3000;
app.listen(port, function() {
  console.log("Server Started on PORT " + port + ".");
});

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname+"/index.html");
  // __dirname: current file location.
});

app.post("/", function(req, res) {
  console.log(req.body);
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  // result = num1 + num2;
  var result = calculator(num1, num2, add);
  res.send("Result is " + result);
  console.log(result);
});


/* BMI Calculator */
app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
  console.log(req.body);
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  console.log(weight, height);
  var result = weight/Math.pow(height,2);
  console.log(result);
  res.send("BMI is "+result);
})
// $(".btn").click(function() {
//   operator = $(this).attr('id');
//   console.log(operator);
// });

// calculator
function add(num1, num2) {
  return num1+num2;
}

function multiply(num1, num2){
  return num1*num2;
}

function divide(num1, num2){
  return num1/num2;
}
function substract(num1, num2){
  return num1-num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}
