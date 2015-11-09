var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var session = require('express-session');
var mongoose = require('mongoose');
var app = express();



//MIDDLEWARE


app.use(cors());
app.use(bodyParser.json());
app.use(session({
   secret: 'Elder Corbin', 
   resave: false,
   saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//MODELS
var Area = require('./Models/areaModel');
var Person = require('./Models/personModel');

//CONTROLLERS
var areaCtrl = require('./Controllers/serverAreaCtrl');
var personCtrl = require('./Controllers/personCtrl');



//DATABASE
var mongoUri = "mongodb://localhost:27017/missionaryplanner";
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
   console.log("Connected on " + mongoUri);
});

//PORT
var port = 8080; 
app.listen(port, function(){
   console.log("Listening on port ", port); 
});


//STATIC
app.use(express.static(__dirname+'/Public'));


//ENDPOINTS
app.post('/api/newArea', areaCtrl.createNewArea);
app.post('/api/newPerson', personCtrl.createNewPerson);
app.get('/api/Persons', personCtrl.getPeople);
app.delete('/api/delete/:id', personCtrl.deletePeople); 
