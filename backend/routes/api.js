const passport = require('passport');
const express = require('express');
const fs = require('fs');
const sharp = require('sharp');
const auth = require('./auth');
const User = require('../models/User');
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
router.get('/getusers', auth, async (req, res) => {
  const users = await User.find();
  res.json(users);
});
router.get('/userpolls/:_id', auth, async (req, res) => {
  const userPolls = await Poll.find({ users: { usersId: req.params._id } },
    { users: { dateCreated: { $lte: dateExpired } } });
  res.json(userPolls);
});
router.get('/getpoll/:_id', auth, async (req, res) => {
  const poll = await Poll.find({ _id: req.params._id })
  res.json(poll);
});

router.post('/addPoll', auth, async (req, res) => {
  const { pollName, questions, users, creator, dateCreated, dateExpired
  } = req.body;
  const questionsAtPoll = [];
  for (let i = 0; i < questions.length; i++) {
    const question = new Question({
      questionName: question[i].questionName,
      filesPath: question[i].filesPath,
      answer: question[i].answer,
    });
    await question.save();
    FinalARR.push(question._id);
  }
  const poll = new Poll({
    pollName,
    questions: questionsAtPoll,
    users,
    creator,
    dateCreated,
    dateExpired,
  });
  poll.save();
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
