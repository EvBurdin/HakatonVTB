const db = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const QuestionSchema = new db.Schema({
  question: String,
  filesPath: [],
  answer: [{
    userId: {
      type: db.Schema.Types.ObjectId, ref: 'User' // наполнить весь.
    },
    status: Boolean,
    comment: String,
  }],
  

});


module.exports = db.model('Question', QuestionSchema);
