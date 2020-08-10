class NotFoundError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}
export default NotFoundError;
