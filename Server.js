var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
const pug = require('pug');

app.set('view engine', 'pug');
app.set('views', './views');

router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});

router.get("/", function(req, res){
  res.render('index');
});

router.get("/about", function(req, res){
  res.render('about');
});

router.get("/contact", function(req, res){
  res.render('contact');
});

app.use("/",router);

app.use("*", function(req, res){
  res.sendFile(path + "404.html");
});

app.listen(3000, function(){
  console.log("Live at Port 3000");
});
