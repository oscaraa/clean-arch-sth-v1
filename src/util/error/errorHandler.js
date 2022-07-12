import { APIError } from './error.js'


/*
  TODO:
  - Create a CLOSURE to handle the error
    [ ] It's gonna recieve the functions to log either file or db the error
    [ ] Has it to respond?
*/
export const handleError = async (err) =>  {
  console.log('fsdfsdfsdfs error prograado')
  await logger.error(
    'Error message from the centralized error-handling component',
    err,
  );
  await sendMailToAdminIfCritical();
  await sendEventsToSentry();
}

export const isTrustedError = ( error ) =>  {

  if (error instanceof APIError) return error.isOperational;
  
  return false;
}