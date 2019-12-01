const Model = require('./Model');
const {isNil, isEmpty} = require('ramda');

class User extends Model {

  constructor(username) {
      super();

      if (isNil(username) || isEmpty(username)) {
        throw new Error('Missing required constructor parameters');
      }

      this.username = username;
  }

  register(password) {
    return this.create(password);
  }

}

module.exports = User;
