const db = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const PollSchema = new db.Schema({
  pollName: String,
  questions: [{
    questionId: { type: db.Schema.Types.ObjectId, ref: 'Question' }
  }],
  users: [{
    userId: { type: db.Schema.Types.ObjectId, ref: 'User' }
  }],
  creator: {
    creatorId: { type: db.Schema.Types.ObjectId, ref: 'User' },
    name: String,
  },
  dateCreated: Date,
  dateExpired: Date,

});

UserSchema.plugin(passportLocalMongoose);
module.exports = db.model('Poll', PollSchema);
