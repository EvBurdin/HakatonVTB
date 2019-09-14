const passport = require('passport');
const express = require('express');
const fs = require('fs');
const sharp = require('sharp');
const User = require('../models/User');
const auth = require('./auth');
const Poll = require('../models/Poll');
const Question = require('../models/Question');

const router = express.Router();

router.post('/registration', async (req, res, next) => {
  console.log('registering user');
  const { username, password } = req.body;
  const newUser = new User({ username });
  User.register(newUser, password, (e) => {
    if (e) {
      res.send('false');
    } else {
      fs.mkdir(`./backend/public/${username}/tmb`, { recursive: true }, (err) => {
        console.log(err);
      });
      console.log('user registered!');
      res.send('true');
    }
  });
});
router.post('/login', passport.authenticate('local'), (req, res) => {
  console.log(`User ${req.session.passport.user} loged in`);
  res.send(req.session.passport.user);
});
router.post('/logout', auth, (req, res) => {
  console.log(`User ${req.session.passport.user} loged out`);
  req.session.destroy();

  res.send(true);
});

router.post('/user', auth, (req, res) => {
  console.log(`User ${req.session.passport.user} loged in`);
  res.send(req.session.passport.user);
});
router.post('/secret', auth, async (req, res) => {
  const { user } = req.session.passport;
  const images = await Image.find({ username: user });
  res.json(images);
});
// пример реализации загрузки файлов
router.post('/images', auth, async (req, res) => {
  const data = JSON.parse(req.body.data);
  const image = req.files[data.fileName];
  const username = req.session.passport.user;
  const imageName = data.fileName.slice(0, data.fileName.lastIndexOf('.'));
  const imageFormat = data.fileName.slice(data.fileName.lastIndexOf('.') + 1);
  const imagePath = `/${username}/${image.name}`;
  const tmbPath = `/${username}/tmb/${imageName}-tmb.${imageFormat}`;
  await image.mv(`./backend/public${imagePath}`);
  sharp(image.data)
    .resize(200, 200, {
      fit: sharp.fit.inside,
      withoutEnlargement: true,
    })
    .toFile(`./backend/public/${tmbPath}`);
  res.end();
});

module.exports = router;
