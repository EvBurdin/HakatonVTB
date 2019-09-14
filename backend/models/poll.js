const db = require('mongoose');


const UserSchema = new db.Schema({
  createDate: { type: Date, default: new Date() },
  username: String,
});

module.exports = db.model('Poll', UserSchema);
