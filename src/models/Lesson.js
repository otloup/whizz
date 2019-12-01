const Model = require('./Model');

class Lesson extends Model {

  constructor(code, level) {

    super();

    if (undefined === code || undefined === level) {
      throw new Error('Missing required constructor parameters');
    }

    this.code = code;
    this.level = level;

  }

}

module.exports = Lesson;
