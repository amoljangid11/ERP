var express = require('express');
var bodyParser= require('body-parser');
var mongoose = require('mongoose');
var config=require('./config/database');
var app = express();
var path =require('path');
var router=express.Router();
var multer = require('multer');
// var port = 4200;
var authentication=require('./routes/authentication')(router);
var cors= require('cors');
var _ = require('lodash');
var rest = new require('restful-api')(app);
var passport= require('passport');
mongoose.promise=global.promise

var async=require('async')

app.use(express.static(path.join(__dirname, 'uploads')));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});




var storage = multer.diskStorage({
 
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
 
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});




var upload = multer({ storage: storage });

app.post("/upload", upload.single('avatar'), function (req, res, next) {
  if (req.file == null){
    console.log('file', req.file);
  res.send(req.file);
    
  }
  else
  {
    MongoClient.connect(url, function(err, db){
      console.log('landing here', req.file)
       // read the img file from tmp in-memory location
       var newImg = fs.readFileSync(req.file.path);
       // encode the file as a base64 string.
       var encImg = newImg.toString('base64');
       // define your new document
       var newItem = {
        contentType: req.file.mimetype,
        size: req.file.size,
        name: req.file.originalname,
        path: req.file.path
     };
     db.collection('asset')
     .insert(newItem, function(err, result){
     if (err) { console.log(err); };
        var newoid = new ObjectId(result.ops[0]._id);
        fs.remove(req.file.path, function(err) {
           if (err) { console.log(err) };
           res.send(newItem);
           });
        });
     });
  }});
    
// var server = app.listen(port, function () {
//   console.log("Listening on port %s...", port);
// });

app.use(cors({
  origin:'http://localhost:4200'
}));

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json({limit:"50mb"})); // parse application/json
//for security purpose


//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('./models/user');
const jwt = require('jsonwebtoken');

app.use(express.static(__dirname + '/client/dist/'));
app.use('/', authentication);



app.options('*', cors())

app.use(function(req, res,next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Request-Method','*');

  res.header('Access-Control-Allow-Methods', 'GET,PUT,OPTIONS,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Expose-Headers','set')
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Request-Headers', '*')

 next();

});
 


app.use(passport.authenticate('jwt', { session: false }),function(res,req,next){


if(res){
 
  new_res=res;
  
next();


}
else{
 
console.log("error")
}

})

var rout=require('./grid/routing');
 app.use('/grid',rout) 

mongoose.connect(config.uri,(err)=>{
	if(err){
		console.log('Could not connect to db',err);
	}
	else{

    app.models = require('./models/index');

  // Load the routes.
  var routes = require('./routes/routes');
  _.each(routes, function(controller, route) {
    app.use(route, controller(app, route));
  });


app.listen(3000,(err)=>{
  if(err)
  {
     console.log(err,"--------102")
  }
 
	console.log('Listening to the port 3000');
});


		console.log('connect  to db'+config.db);
	}
});