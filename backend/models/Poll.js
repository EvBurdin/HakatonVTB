const db = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const PollSchema = new db.Schema({
  pollName: String,
  questions: [{
    questionName: String,
    filesPath: String,
    votedUsers: [{
      votedUsersId: { type: db.Schema.Types.ObjectId, ref: 'User' }
    }]
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
module.exports = db.model('User', PollSchema);
