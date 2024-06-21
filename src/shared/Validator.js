class Validator {
  static #ERROR_MESSAGES = Object.freeze({
    INVALID_VALUE: '빈 값은 허용되지 않습니다.',
  });

  constructor(value) {
    Validator.#validateValue(value);
    this.value = value;
  }

  static from(value) {
    return new Validator(value);
  }

  _throwError(message) {
    throw new Error(message);
  }

  static #validateValue(value) {
    if (!value) {
      Validator._throwError(Validator.#ERROR_MESSAGES.INVALID_VALUE);
    }
  }
}

export default Validator;