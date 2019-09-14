const db = require('mongoose');
const faker = require('faker');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new db.Schema({
  createDate: { type: Date, default: new Date() },
  username: String,
  firstName: { type: String, default: faker.name.firstName() },
  lastName: { type: String, default: faker.name.lastName() },
  position: { type: String, default: 'director' },
  company: { type: String, default: faker.company.companyName() },
  
});
UserSchema.plugin(passportLocalMongoose);
module.exports = db.model('User', UserSchema);
