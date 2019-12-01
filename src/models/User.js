const Model = require('./Model');
const {HttpError, Forbidden} = require('../errors');
const {isNil, isEmpty, split, last} = require('ramda');

const expectedForbiddenError = 403;
const expectedDeniedError = 500;

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
      let expectedError = last(split('-', username));

      switch (Number.parseInt(expectedError)) {
          case expectedForbiddenError:
            throw new Forbidden();

          case expectedDeniedError:
            throw new HttpError(500);
      }

      let user = new this(username);
      user.register(password);
      return user;
  }
}

module.exports = User;
