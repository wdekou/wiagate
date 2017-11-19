import express from 'express';
import jwt from 'jsonwebtoken';

import auth from './auth';
import wisps from './wisps';

const authenticate = (app) => (req, res, next) => {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  
    // decode token
    if (token) {
  
      // verifies secret and checks exp
      jwt.verify(token, app.get('APP_SECRET'), function(err, decoded) {      
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });    
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded; 
          next();
        }
      });
  
    } else {
  
      // if there is no token
      // return an error
      return res.status(403).send({ 
          success: false, 
          message: 'No token provided.' 
      });
  
    }
}

const router = (app) => {
  const router = express.Router();
  router.use('/auth', auth(app));
  router.use('/wisps', authenticate(app), wisps(app))

  return router;  
}


export default router;
