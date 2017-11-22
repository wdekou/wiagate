import express from 'express';
import log from '../../common/log';

const router = (app) => {

  const router = express.Router();

  router.get('/ping', (req, res) => {
    log('Respon Pong to the Router',  req.query);
    res.send('Pong');
    res.end();
  })

  router.get('/login', (req, res) => {
    log('Login route',  req.query);
    console.log(res.universalCookies)
    res.redirect(301, `http://${req.query.gw_address}:${req.query.gw_port}/wifidog/auth?token=15455665224565`)
    res.end();
  })

  router.get('/auth', (req, res, next) => {
    log('Auth route', req.query)
    res.send('Auth: 5');
    res.end();
  });

  router.get('/portail', (req, res, next) => {
    res.send('Portal');
    res.end();
  });

  router.get('/message.php', (req, res, next) => {
    res.send('Message: the message');
    res.end();
  });

  router.get('/', (req, res) => {
    res.send('Welcome');
    res.end();
  });
}

export default router;
