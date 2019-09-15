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

router.get('/user', auth, async (req, res) => {
  console.log(`User ${req.session.passport.user} loged in`);
  const user = await User.findOne({ username: req.session.passport.user });
  res.send(user);
});

router.get('/users', auth, async (req, res) => {
  const users = await User.find();
  res.json(users);
});
router.get('/userpolls/:_id', auth, async (req, res) => {
  const userPolls = await Poll.find(
    { users: { usersId: req.params._id } },
    { users: { dateCreated: { $lte: dateExpired } } },
  );
  res.json(userPolls);
});
router.get('/getpoll/:_id', auth, async (req, res) => {
  const poll = await Poll.find({ _id: req.params._id })
    // populate('questionId',
    // populate('userId')); // возможно тут populate:{path:'userId}
    .populate({
      path: 'questionId',
      populate: { path: 'userId' },
    });
  res.json(poll);
});

router.post('/addPoll', async (req, res) => {
  const data = JSON.parse(req.body.data);
  const poll = {};
  poll.pollName = data.title;
  poll.creatorId = data.creatorId;
  poll.dateExpired = data.expiredDate;
  poll.questions = [];
  poll.users = data.agreedUsers.map((el) => { return {userId: el._id, status: true}});
  for (let i = 0; i < data.questions.length; i++) {
    const question = {};
    question.filesPath = [];
    question.answer = [];
    question.question = data.questions[i].question;
    for (let j = 0; j < data.questions[i].files.length; j++) {
      question.filesPath.push(`/pols/${data.title}/${data.questions[i].question}/${data.questions[i].files[j]}`);
      const file = req.files[`${i}#${data.questions[i].files[j]}`];
      file.mv(`./backend/public/pols/${data.title}/${data.questions[i].question}/${data.questions[i].files[j]}`);
    }
    const newQuestion = new Question(question);
    poll.questions.push(newQuestion._id);
    await newQuestion.save();
  }
  const newPoll = new Poll(poll);
  await newPoll.save();

  // console.log(req.files);
  // путь к файлу == название голосования/название вопроса/
  // const title = data.title; //название голосования
  // const massQuestion = data.questions[i]; // массив вопросов
  // const filePath = `/${title}/${massQuestion}`;
  // data.questions - массив вопросов
  // data.questions[i]. for(let j = 0; j < data.agreedUsers.length ;j++) { let answer.push(data.questions[i].agreed[j]._id)}
  // const allQuestionsAtPoll = [];

  // for (let i = 0; i < data.questions.length; i++) {
  //   console.log(`vopros [${i}] = `, data.questions[i].question);
  //   // allQuestionsAtPoll.push(data.questions[i].question);

  // // }
  // const questionSummary = [];
  // // console.log(data.questions[0].question);
  // // console.log(data);

  // for (let i = 0; i < data.questions.length; i++) {
  //   const question = new Question({
  //     questionName: data.questions[i].question,
  //     filesPath: `/${data.title}/${data.questions[i].question}`,
  //     answer: [],
  //   });
  //   await question.save();
  //   console.log(`[${i}] question = `, question, '/n');

  //   questionSummary.push(question._id);
  // }
  // // const questionId = [];
  // // for (let i = 0; i < questionSummary.length; i++) {
  // //   questionId.push(questionSummary[i])
  // // }

  // const allUsers = [];
  // const user = {
  //   userId: [],
  //   status: true,
  // };
  // for (let i = 0; i < data.agreedUsers.length; i++) {
  //   const user = {
  //     userId: data.agreedUsers[i]._id,
  //     status: true,
  //   };
  //   allUsers.push(user);
  // }
  // const poll = new Poll({
  //   pollName: data.title,
  //   questions: questionSummary,
  //   users: allUsers,
  // creator: data.creatorId,
  // dateExpired: data.expiredDate,
  // });

  // await poll.save();
  // console.log(poll);
  // const filesNames = Object.keys(req.files);
  // for (let i = 0; i < filesNames.length; i++) {
  //   const x = `/${data.title}/${data.questions[i].question}/${req.files[filesNames[i]].name}`;
  //   await req.files[filesNames[i]].mv(`./public${x}`);
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
