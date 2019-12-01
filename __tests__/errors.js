const { HttpError, Forbidden } = require('../src/errors');

test('Errors can be constructed', () => {
  new HttpError(500);
  new Forbidden();
});

test('Errors extend the correct class', () => {
  expect(HttpError.prototype).toBeInstanceOf(Error);
  expect(Forbidden.prototype).toBeInstanceOf(HttpError);
});

test('Errors contain the correct properties', () => {

  let error;

  error = new HttpError(500);
  expect(error.status).toBe(500);

  error = new Forbidden();
  expect(error.status).toBe(403);

});
