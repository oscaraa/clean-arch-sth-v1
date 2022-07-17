import { APIError } from "./error.js";

export const isTrustedError = ( error ) =>  {
    if (error instanceof APIError) return error.isOperational;
    
    return false;
  }