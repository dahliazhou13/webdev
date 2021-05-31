//jshint esversion:6

const express = require('express');
const app = express();

app.get("/",function(request, response){
  response.send("<h1>Hello World</h1>");
});


app.get("/contact",function(req,res){
  res.send("<h1>Contact Me<\h1>");
});

app.get("/about",function(req, res){
  res.send("I'm Doris");
});




app.listen(3000, function(){
  console.log("Server started on port 3000");
});
