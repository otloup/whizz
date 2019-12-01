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
          {username: this.username},
          password ? {password} : null
      );
  }

    register(password) {
        return this.create(password);
    }

  static async register(username, password) {
      let user = new this(username);
      user.register(password);
      return user;
  }
}

module.exports = User;
