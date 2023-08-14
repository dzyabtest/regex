/* eslint-disable linebreak-style */
/* eslint-disable indent */
import Validator from '../app';

test('validate user name 1', () => {
  const result = Validator.validateUsername('user');

  expect(result).toBe(true);
});

test('validate user name 2', () => {
  const result = Validator.validateUsername('user123user');

  expect(result).toBe(true);
});

test('validate user name 3', () => {
    const result = Validator.validateUsername('user123user');

    expect(result).toBe(true);
  });

  test('validate user name 4', () => {
    const result = Validator.validateUsername('user123u-s_er');

    expect(result).toBe(true);
  });

  test('validate user name 5', () => {
    const result = Validator.validateUsername('1user123user');

    expect(result).toBe(false);
  });

  test('validate user name 6', () => {
    const result = Validator.validateUsername('user123user-');

    expect(result).toBe(false);
  });

  test('validate user name 7', () => {
    const result = Validator.validateUsername('user1234user');

    expect(result).toBe(false);
  });
