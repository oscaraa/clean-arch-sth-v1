import { config } from "dotenv";
// Load environment variables from .env file
config();

import { 
    format, 
    transports, 
    createLogger, 
    addColors 
} from 'winston';

import { customLevels } from './customLevels.js';


const formatter = format.combine(
    format.colorize(),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.splat(),
    format.printf((info) => {
        const { timestamp, level, message, ...meta } = info;

        return `${timestamp} [${level}]: ${message} ${Object.keys(meta).length ? JSON.stringify(meta, null, 2) : '' }`;
    }),
);

const prodTransport = new transports.File({
    filename: 'logs/errors.log',
    level: 'error',
    format: format.json()
});

const transport = new transports.Console({
    format: formatter,
});

class Logger {

    constructor() {
        
        const typeTransport = !process.env.NODE_ENV === "production" ? [prodTransport, transport] : [transport];

        this.logger = createLogger({
            level: !process.env.NODE_ENV ? 'trace' : 'error',
            levels: customLevels.levels,
            transports: typeTransport,
        });
        addColors(customLevels.colors);
    }

    trace(msg, meta) {
        this.logger.log('trace', msg, meta);
    }

    debug(msg, meta) {
        this.logger.debug(msg, meta);
    }

    info(msg, meta) {
        this.logger.info(msg, meta);
    }

    warn(msg, meta) {
        this.logger.warn(msg, meta);
    }

    error(msg, meta) {
        this.logger.error(msg, meta);
    }

    fatal(msg, meta) {
        this.logger.log('fatal', msg, meta);
    }
}

export const logger = new Logger();