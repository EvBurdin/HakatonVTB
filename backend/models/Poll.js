const db = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const PollSchema = new db.Schema({
  pollName: String,
  questions: [
    {
      questionId: { type: db.Schema.Types.ObjectId, ref: 'Question' }, // наполнить
    },
  ],
  users: [
    {
      userId: {
        type: db.Schema.Types.ObjectId,
        ref: 'User',
      },
      status: Boolean,
    },
  ],
  creator: {
    creatorId: { type: db.Schema.Types.ObjectId, ref: 'User' },
  },
  dateCreated: { type: Date, default: new Date() },
  dateExpired: Date,
});

module.exports = db.model('Poll', PollSchema);
