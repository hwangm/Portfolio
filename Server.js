var express = require("express");
var app = express();
var path = require('path');
var router = express.Router();
var path = __dirname + '/views/';
const pug = require('pug');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});

router.get("/", function(req, res){
  res.render('index');
});

router.get("/About", function(req, res){
  res.render('about');
});

router.get("/Projects", function(req, res){
  res.render('projects');
});

app.use("/",router);

app.listen(3000, function(){
  console.log("Live at Port 3000");
});
