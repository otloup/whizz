const { HttpError, Forbidden } = require('../src/errors');
const { Lesson, Model, User } = require('../src/models');

jest.mock('../__mocks__/axios.js');

test('Models can be constructed', () => {
  new Model();
  new Lesson('AA', 1);
  new User('jbloggs');
  expect(() => { new Lesson() }).toThrow('Missing required constructor parameters');
  expect(() => { new User() }).toThrow('Missing required constructor parameters');
});

test('Models extend the correct class', () => {
  expect(Lesson.prototype).toBeInstanceOf(Model);
  expect(User.prototype).toBeInstanceOf(Model);
});

test('Models contain correct methods', () => {
  const model = new Model();
  expect(typeof model.create).toBe('function');
  expect(typeof model.toCreateParams).toBe('function');
});

test('Lessons contain correct properties', () => {
  const lesson = new Lesson('AA', 1);
  expect(lesson.code).toBe('AA');
  expect(lesson.level).toBe(1);
  expect(lesson.reference).toBe('AA.1');
  expect(lesson.toCreateParams()).toEqual({
    code: 'AA',
    level: 1,
  });
});

test('Lessons reference updates correctly', () => {
  const lesson = new Lesson('AA', 1);
  expect(lesson.reference).toBe('AA.1');
  lesson.code = 'BB';
  expect(lesson.reference).toBe('BB.1');
});

test('Users contain correct methods', () => {
  const user = new User('jbloggs');
  expect(typeof User.register).toBe('function');
  expect(typeof user.register).toBe('function');
});

test('Users contain correct properties', () => {
  const user = new User('jbloggs');
  expect(user.username).toBe('jbloggs');
  expect(user.toCreateParams('secret')).toEqual({
    password: 'secret',
    username: 'jbloggs',
  });
});

test('Users can register statically', async () => {
  await expect(User.register('jbloggs', 'secret').catch((err) => err)).resolves.toBeDefined();
});

test('Users can register from from an instance', async () => {
  const user = new User('jbloggs');
  await expect(user.register('secret').catch((err) => err)).resolves.toBeDefined();
});

test('Users registration returns the registered user', async () => {
  expect.assertions(2);
  return User.register('jbloggs', 'secret').then((user) => {
    expect(user).toBeInstanceOf(User);
    expect(user.username).toBe('jbloggs');
  });
});

test('Forbidden user registration errors are handled correctly', async () => {
  expect.assertions(2);
  return User.register('jbloggs-403', 'secret').catch((err) => {
    expect(err).toBeInstanceOf(Forbidden);
    expect(err.status).toBe(403);
  });
});

test('Generic user registration errors responses are handled correctly', async () => {
  expect.assertions(2);
  return User.register('jbloggs-500', 'secret').catch((err) => {
    expect(err).toBeInstanceOf(HttpError);
    expect(err.status).toBe(500);
  });
});
