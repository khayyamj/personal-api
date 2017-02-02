var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000;

var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');
var user = require('./user.js');
var skills = require('./skillz.js');

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getOccupationsLast);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyByGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantsByName)

app.get('/skills', mainCtrl.getSkillz);

app.get('/secrets/:username/:password', middleware.verifyUser, mainCtrl.getSecrets)

/* PUT - modifying information  */

app.put('/name', mainCtrl.putName);
app.put('/location', mainCtrl.putLocation);

/* POST - adding to the current information  */

app.post('/hobbies', mainCtrl.postHobbies);
app.post('/occupations', mainCtrl.postOccupations);
app.post('/family', mainCtrl.addFamily);
app.post('/restaurants', mainCtrl.addRestaurants);

app.post('/skills', middleware.generateId, mainCtrl.addSkillz)


app.listen(PORT, function(){
   console.log("Listening on port " + PORT);
})
