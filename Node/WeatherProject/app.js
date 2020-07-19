const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
  // console.log(req.body.cityName);
  console.log("Post request received.");
  const city = req.body.cityName;
  const apiKey = "2924c9130c15b190a25834e61e4d8ab5";
  // const unit = "metric";
  var unit = req.body.unit;
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=" + unit;
  https.get(url, function(response) {
    console.log('statusCode: ',response.statusCode);
    console.log(url);
    response.on('data', function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const iconId = weatherData.weather[0].icon;
      const icon_url = "http://openweathermap.org/img/wn/"+iconId+"@2x.png"
      console.log("temperature: ", temp);
      console.log("description: ", description);
      res.write("<title>Weather in " + city + "</title>")
      if(unit==="imperial") {
        unit = "Fahrenheit";
      } else if (unit==="metric") {
        unit = "Celcius";
      } else {
        unit = "Kelvin";
      }
      res.write("<h1>The temperature in " + city + " is " + temp + " degree " + unit + ".</h1>");
      res.write("<h2>The weather is currently " + description + "</h2>");
      res.write("<img src=" + icon_url + ">");
      res.write("<hr style='border:0px;'><button><a href='http://localhost:3000'>Back</a></button>")
      res.send();
    });
  });
});

app.listen(3000, function(){
  console.log("Server is running on PORT 3000...");
});

// app.get("/", function(req, res){
//   const city = "Shenzhen";
//   const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2924c9130c15b190a25834e61e4d8ab5&units=metric";
//   console.log(url);
//   https.get(url, function(response){
//     // console.log(response);
//     console.log('statusCode: ',response.statusCode);
//     // console.log('statusCode:', response.statusCode);
//     // console.log('headers:', response.headers);
//
//     response.on('data', function(data) {
//       // console.log(data);
//       const weatherData = JSON.parse(data);
//       // console.log(weatherData);
//
//       /* stringify(): the opposite of parse() */
//       // const object = {
//       //   name: "Grace",
//       //   favorite: "pepper"
//       // }
//       // console.log(JSON.stringify(object));
//
//       const temp = weatherData.main.temp;
//       const description = weatherData.weather[0].description;
//       const iconId = weatherData.weather[0].icon;
//       const icon_url = "http://openweathermap.org/img/wn/"+iconId+"@2x.png"
//       console.log("temperature: ", temp);
//       console.log("description: ", description);
//       res.write("<h1>The temperature in " + city + " is " + temp + " degree Celcius.</h1>");
//       res.write("<h2>The weather is currently " + description + "</h2>");
//       res.write("<img src=" + icon_url + ">");
//       res.send();
//       // process.stdout.write(d);
//     });
//   });
//   /* only 1 send() in .js file */
//   // res.send("Server is up and running");
// });
