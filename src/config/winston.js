/*
 * @Author: Matheus Rezende
 * @Date: 2018-07-04 19:55:53
 * @Last Modified by:   @matheusrezende
 * @Last Modified time: 2018-07-04 19:55:53
 */
/**
 * Create the winston logger instance
 */

import winston from 'winston';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true,
    }),
  ],
});

export default logger;
