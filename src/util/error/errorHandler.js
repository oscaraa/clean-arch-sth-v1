import { logger } from '../logger/index.js';
import { APIError } from './error.js'


/*
  TODO:
  - Create a CLOSURE to handle the error
    [ ] It's gonna recieve the functions to log either file or db the error
    [ ] Has it to respond?
*/
export const handleError =  ( { saveError } ) =>  {
  return async ( error, { url, method, paramas, body, query } ) => {
      logger.error(error, { url, method, paramas, body, query });
      await saveError(error);
  }
}

export const isTrustedError = ( error ) =>  {

  if (error instanceof APIError) return error.isOperational;
  
  return false;
}