var express = require("express");
var app = express();
const path = require('path');
var router = express.Router();

//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.use("/styles",  express.static(__dirname + '/../public/css'));
app.use("/scripts", express.static(__dirname + '/../public/js'));
app.use("/images",  express.static(__dirname + '/../public/img'));


function sendViewMiddleWare( req, res, next){
  res.sendView = function( view){
  return res.sendFile(path.resolve(__dirname + "/../public/view/" + view ));
}
  next();
}

app.use(sendViewMiddleWare);

app.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.get("/",function(req,res){
  res.sendView("index.html");
});

app.get("/about",function(req,res){
  res.sendView("about.html");
});

app.get("/contact",function(req,res){
  res.sendView("contact.html") ;
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendView("404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
