import { httpStatusCode } from '../httpStatusCode.js';

class BaseError extends Error {

  constructor(name, statusCode, isOperational, description) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);
  
    this.name = name;
    this.isOperational = isOperational;
    this.statusCode = statusCode;
    Error.captureStackTrace(this);
  }
}

//free to extend the BaseError
export class APIError extends BaseError {
  constructor(name, isOperational = true, description = 'internal server error') {
    super(name, httpStatusCode[name], isOperational, description);
  }
}