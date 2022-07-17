import { logger } from '../logger/index.js';
export const logError = (error, { url, method, params, body, query }) => {
    logger.error(error, { url, method, params, body, query });
}
