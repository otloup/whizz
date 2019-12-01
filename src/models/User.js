const Model = require('./Model');

class User extends Model {

  constructor(username) {

    super();

    this.username = username;

  }

  register(password) {
    return this.create(password);
  }

}

module.exports = User;
