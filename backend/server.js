const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();
const db = require('mongoose');
const morgan = require('morgan');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');
const apiRouter = require('./routes/api');

app.use(
  fileUpload({
    createParentPath: true,
  }),
);
const corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(
  session({
    secret: 'EdefZXDFGrtfgdtjsQewwfQWwe',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 86400000,
    },
  }),
);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
db.connect('mongodb+srv://root:z1qx2wc3e@cluster0-ser1y.mongodb.net/desteny?retryWrites=true&w=majority', { useNewUrlParser: true });
app.use('/api', apiRouter);

app.listen(3000);
console.log('server listen o port 3000');
