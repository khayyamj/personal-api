var user = require('../user.js');
var skills = require('../skillz.js');


/*  Retrieving Information  */

module.exports = {
   getName: function(req, res, next) {
      res.status(200).json(user.name);
   },
   getLocation: function(req, res) {
      res.status(200).json(user.location);
   },
   getOccupations: function(req, res) {
      if (req.query.order === "desc" || req.query.order === "asc") {
         user.occupations.sort();
         console.log(req.query.order);
         req.query.order === 'asc' ? res.status(200).json(user.occupations.reverse()) : res.status(200).json(user.occupations);
      }
      else {
         res.status(200).json(user.occupations)
      };
   },
   getOccupationsLast: function(req, res) {
      console.log("if you have time, reconfigure this last occupation output.");
      res.status(200).json(user.occupations[0]);
   },
   getHobbies: function(req, res) {
      res.status(200).json(user.hobbies);
   },
   getHobbiesType: function(req, res) {
      var typeHobbies = [];
      for (var i = 0; i < user.hobbies.length; i++) {
         if (user.hobbies[i].type === req.params.type) {
            typeHobbies.push(user.hobbies[i]);
         }
      }
      res.status(200).json(typeHobbies);
   },
   getFamily: function(req, res) {
      res.status(200).json(user.family);
   },
   getFamilyByGender: function(req, res) {
      var familyByGender = [];
      for (var i = 0; i < user.family.length; i++) {
         if (user.family[i].gender === req.params.gender) {
            familyByGender.push(user.family[i]);
         }
      }
      res.status(200).json(familyByGender);
   },
   getRestaurants: function(req, res) {
      console.log('getRestaurants function...');
      if (req.query.rating) {
         var restaurant = [];
         for (var i = 0; i < user.restaurants.length; i++) {
            if (user.restaurants[i].rating >= req.query.rating) {
               restaurant.push(user.restaurants[i]);
            }
         }
         res.status(200).json(restaurant);
      }  /* end of query option  */

      res.status(200).json(user.restaurants);
   },
   getRestaurantsByName: function(req, res) {
      var restaurant = [];
      console.log('getRestaurantsByName function',user.restaurants);
      console.log("nameQuery: ", req.body.query)
      for (var i = 0; i < user.restaurants.length; i++) {
         if (user.restaurants[i].name.toLowerCase() === req.params.name.toLowerCase()) {
            console.log('if', i);
            restaurant.push(user.restaurants[i]);
         }
      }
      res.status(200).json(restaurant);
   },
   getSkillz: function(req, res) {
      if (req.query.experience) {
         var expList = [];
         for (var i = 0; i < skills.length; i++) {
            if(skills[i].experience.toLowerCase() == req.query.experience.toLowerCase()) {
               expList.push(skills[i]);
            }
         }
         res.status(200).json(expList);
      } else {
         res.status(200).json(skills);
        }
   },

   getSecrets: function(req, res) {
      console.log('getSecrets function with params ', req.params);
      res.status(200).json('Secret file accessed!')
   },



/* Updating or Adding Information  */


   putName: function(req, res) {
      user.name = req.body.name;
      res.status(200).json('Name changed to: ' + user.name);
   },
   putLocation: function(req, res) {
      user.location = req.body.location;
      res.status(200).json('Location changed to: ' + user.location);
   },
   postHobbies: function(req, res) {
      if (req.body.name) {
      user.hobbies.push(req.body);
      res.status(200).json('Hobbies have been updated');
      } else {
      res.status(400).json('Hobbies not updated.')
      }
   },
   postOccupations: function(req, res) {
      if (req.body.occupation) {
      user.occupations.push(req.body.occupation);
      res.status(200).json('Occupations have been updated');
      } else {
      res.status(400).json('Occupations not updated.')
      }
   },
   addFamily: function(req, res) {
      if (req.body.name) {
      user.family.push(req.body);
      res.status(200).json('Family has been updated');
      } else {
      res.status(400).json('Family not updated.')
      }
   },
   addRestaurants: function(req, res) {
      if (req.body.name) {
      user.restaurants.push(req.body);
      res.status(200).json('Restaurants has been updated');
      } else {
      res.status(400).json('Restaurants not updated.')
      }
   },
   addSkillz: function(req, res) {
      if (req.body.name) {
      skills.push(req.body);
      res.status(200).json('Skills has been updated');
      } else {
      res.status(400).json('Skills not updated.');
      }
   }


}
