class ValidationError extends Error {
  constructor({ message, statusCode }) {
    super(message)
    this.name = 'ValidationError'
    this.statusCode = statusCode
    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = ValidationError
