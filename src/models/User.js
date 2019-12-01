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

  toCreateParams(password) {
      return Object.assign(
          {
              username: this.username
          },
          password ? {password} : null
      );
  }

    register(password) {
    let user = new User();
    return user.create(password);
  }

  static register(password) {
      self.register(password)
  }
}

module.exports = User;
