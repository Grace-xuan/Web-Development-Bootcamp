/* list.ejs is the base template to create toDOList */

const bodyParser = require('body-parser');
const express = require('express');
const date = require(__dirname + '/date.js');
const app = express();

const itemList = [];
const workList = [];
// able to push to a const array, but not assign. 

app.set('view engine', 'ejs');  // using EJS with Express
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req,res){
  // res.send("Hello");
  const day = date.getDate();

  res.render("list", {
    headTitle:"ToDoList",
    listTitle:"To Do",
    kindOfDay: day,
    itemList: itemList
  });

  // var currentDay = today.getDay();
  // switch(currentDay) {
  //   case 0:
  //     currentDay = "Sunday";
  //     break;
  //   case 1:
  //     currentDay = "Monday";
  //     break;
  //   case 2:
  //     currentDay = "Tuesday";
  //     break;
  //   case 3:
  //     currentDay = "Wednesday";
  //     break;
  //   case 4:
  //     currentDay = "Thursday";
  //     break;
  //   case 5:
  //     currentDay = "Friday";
  //     break;
  //   case 6:
  //     currentDay = "Saturday";
  //     break;
  //   default:
  //     console.log("error, currentDay = "+currentDay);
  // }
  // res.render("list", {
  //   kindOfDay: currentDay
  // })
})

app.get("/work", function(req,res){
  const day = date.getDay();
  res.render("list", {
    headTitle:"WorkList",
    listTitle:"Work",
    kindOfDay:day,
    itemList: workList
  });
})

app.post("/", function(req,res){
  console.log(req.body.list);
  if (req.body.list === "Work") {
    workList.push(req.body.newItem);
    res.redirect("/work");
  } else {
    itemList.push(req.body.newItem);
    res.redirect("/");
  }
})

app.listen(3000, function(){
  console.log("Server started on PORT 3000.");
})
