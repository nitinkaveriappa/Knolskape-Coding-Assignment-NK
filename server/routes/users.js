var express = require('express');
var router = express.Router();
const axios = require('axios');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

/* GET users listing. */
router.get('/list', async (req, res, next) => {
  let URL = `https://people.googleapis.com/v1/people/me/connections?personFields=names%2CemailAddresses%2CphoneNumbers`;
  if (req.query.pageToken) {
    URL = URL.concat(`&pageToken=${req.query.pageToken}`);
  }
  try {
    const { data } = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${req.user.accessToken}`,
      },
    });
    res.send({ ...data, name: req.user.name, email: req.user.email });
  } catch (error) {
    res.send('ERROR');
  }
});

module.exports = router;
