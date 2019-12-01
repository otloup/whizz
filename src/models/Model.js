const axios = require('axios');

const onRequestError = (err) => Promise.reject(err);

class Model {

  toCreateParams() {
    return {};
  }

  create(...toCreateParamsArgs) {
    return axios('https://example.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.toCreateParams(...toCreateParamsArgs)),
    }).catch(onRequestError).then(() => this);
  }

}

module.exports = Model;
