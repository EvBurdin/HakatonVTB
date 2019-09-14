const db = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const QuestionSchema = new db.Schema({
  questionName: String,
  filesPath: String,
  answer: [{
    userId: {
      type: db.Schema.Types.ObjectId, ref: 'User' // наполнить весь.
    },
    status: Boolean,
    comment: String,
  }],


});


module.exports = db.model('Question', QuestionSchema);
