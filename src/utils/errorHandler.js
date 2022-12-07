//In order to avoid if condition for error everywhere
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
    Error.captureStackTrace(this, this.constructor)
  }
}
export default ErrorHandler
