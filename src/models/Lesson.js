const Model = require('./Model');
const {join} = require('ramda');

class Lesson extends Model {

  constructor(code, level) {

    super();

    if (undefined === code || undefined === level) {
      throw new Error('Missing required constructor parameters');
    }

    this.code = code;
    this.level = level;
  }

  toCreateParams() {
    return {
      code: this.code,
      level: this.level
    };
  }

  get reference() {
    return join('.', [this.code, this.level]);
  }

}

module.exports = Lesson;
