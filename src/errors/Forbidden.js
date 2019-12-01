const HttpError = require('./HttpError');

class Forbidden extends HttpError {
    constructor() {
        super(403);
    }
}

module.exports = Forbidden;
