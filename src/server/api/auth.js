import express from 'express';
import jwt from 'jsonwebtoken';

import models from '../db/models';

const router = (app) => {
  const router = express.Router();

  const login = (req, res)=> {
    models.User.findOne({ 
      where: { 'email': req.body.email },
      attributes: ['id', 'email', 'password']
    }).then((response) => {
      if(!response) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      } else {
        if(response.password !== req.body.password) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else { 
          const token = jwt.sign({email: response.email, wisp: response.wisp}, process.env.APP_SECRET, {
            expiresIn: 7 * 1440 * 60// expires in 24 hours
          });

          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }
      }

    }, (error) => {

    })
  };

  router.post('/login', login)

  router.post('/signup', (req, res)=> {
    models.User.create(
      req.body
    ).then((response) => {
      login(req, res)
    })
  })

  return router;
}
export default router;
