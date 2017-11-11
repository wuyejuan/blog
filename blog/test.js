const Mongolass = require('mongolass');
const mongolass = new Mongolass();
mongolass.connect('mongodb://localhost:27017/iweb');// const mongolass = new Mongolass('mongodb://localhost:27017/test');
 
const User = mongolass.model('User');
 
User
  .find()
  .select({ name: 'wuyejuan'})
  .sort({ name: -1 })
  .exec()
  .then(console.log)
  .catch(console.error);


User
    .insert({name:'wulin',age:18})
    .select({name:1,age:1})
    .sort({name:-1})
    .exec()
    .then(console.log)
    .catch(console.error);