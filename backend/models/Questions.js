const db = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const QuestionSchema = new db.Schema({
  questionName: String,
  filesPath: String,

});

UserSchema.plugin(passportLocalMongoose);
module.exports = db.model('Question', QuestionSchema);
