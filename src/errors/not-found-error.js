class NotFoundError extends Error {
  constructor({ message, statusCode }) {
    super(message)
    this.name = 'NotFoundError'
    this.statusCode = statusCode
    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = NotFoundError
