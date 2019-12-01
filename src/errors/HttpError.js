class HttpError extends Error {

  constructor(status) {
    super();
    this.status = status;
  }

}

module.exports = HttpError;
