var express = require('express');
const passport = require('passport');
var router = express.Router();

const keys = require('../config/keys');

router.get(
  '/google',
  passport.authenticate('google', {
    scope: [
      'profile',
      'email',
      'https://www.googleapis.com/auth/contacts',
      'https://www.googleapis.com/auth/contacts.readonly',
    ],
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: `${keys.frontEndURL}/error`,
  }),
  (req, res) => {
    console.log('Redirect');
    res.redirect(`${keys.frontEndURL}/home`);
  }
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(`${keys.frontEndURL}/login`);
});

module.exports = router;
