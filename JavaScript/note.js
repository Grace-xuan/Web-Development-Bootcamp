function bmiCalculator(weight, height) {
    var res = weight/Math.pow(height,2);
    return Math.round(res);
    // Math.floor(res);
}
var bmi = bmiCalculator(55,1.7);
console.log("BMI Calculator: "+bmi);

var name=prompt("what is your name");
alert("Hello "+name.slice(0,1).toUpperCase()+name.slice(1,name.length).toLowerCase())
/*
var firstLetter = name.slice(0,1); //first letter
var upperCaseFirst = firstLetter.toUpperCase(); //first letter Upper casing
var remainLetter = name.slice(1,name.length);
var lowerCaseRemain = remainLetter.toLowerCase();
alert("Hello "+upperCaseFirst+lowerCaseRemain);
*/

var dogAge=prompt("Age:");
alert("Dog age to Human age is "+((dogAge-2)*4+21));

function fibonacciGenerator (n) {
    var output=[];

    if(n===1) {
        output.push(0);
    } else if(n===2) {
        output.push(0,1);
    } else {
        output.push(0,1);
        for (var i=0; i<n-2; i++) {
            output.push(output[i]+output[i+1]);
        }
    }
    return output;
}

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
