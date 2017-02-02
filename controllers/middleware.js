var skills = require('../skillz.js');

module.exports = {
   addHeaders: function(req, res, next) {
     res.status(200).set({
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
       'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
       'X-XSS-Protection': '1; mode=block',
       'X-Frame-Options': 'SAMEORIGIN',
       'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });
    next();
   },

  generateId: function(req, res, next) {
     req.body.id = ++skills.length;


     next();
   },

   verifyUser: function(req, res, next){
      console.log('verifyUser function with params ', req.params);
      if (req.params.username === 'khayyam' && req.params.password === 'password') {
         console.log('access granted')
         next();
      }
      res.status(403).json('Access Denied');
   }
}
