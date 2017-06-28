var express = require("express");
var app = express();
const path = require('path');
var router = express.Router();


function sendViewMiddleWare( req, res, next){
  res.sendView = function( view){
  return res.sendFile(path.resolve(__dirname + "/../public/view/" + view ));
}
  next();
}

app.use(sendViewMiddleWare);
//const c = express.static(path.join(__dirname, '..','public/view'));
//app.use(c);


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
  res.sendView(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendView(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
