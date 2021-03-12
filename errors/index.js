class CustomError extends Error {
  constructor(message, statusCode, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = 'CustomError';
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = CustomError;
