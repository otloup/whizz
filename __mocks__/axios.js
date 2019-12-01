const mock = (url, options) => {

  const data = options.body ? JSON.parse(options.body) : {};
  const status = /-[0-9]+$/.test(data.username) ? parseInt(data.username.split('-')[1]) : 201;

  if (status >= 400) {
    const error = new Error('An error response was received');
    return Promise.reject({ error, response: { status } });
  }

  return Promise.resolve({ data, status });

};

module.exports = mock;
