/*
 * @Author: Matheus Rezende
 * @Date: 2018-07-04 19:55:49
 * @Last Modified by:   @matheusrezende
 * @Last Modified time: 2018-07-04 19:55:49
 */
/**
 * Configuration of the server middlewares.
 */

import bodyParser from 'body-parser';
import morgan from 'morgan';
import Raven from 'raven';
import compression from 'compression';
import expressWinston from 'express-winston';
import methodOverride from 'method-override';
import helmet from 'helmet';
import cors from 'cors';
import expressStatusMonitor from 'express-status-monitor';

import winstonInstance from './winston';

const isTest = process.env.NODE_ENV === 'test';
const isDev = process.env.NODE_ENV === 'development';

export default (app) => {
  app.use(Raven.requestHandler());
  app.use(compression());
  app.use(bodyParser.json());
  
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(helmet());
  app.use(cors());
  app.use(expressStatusMonitor());
  app.use(methodOverride());
  if (isDev && !isTest) {
    app.use(morgan('dev'));
    expressWinston.requestWhitelist.push('body');
    expressWinston.responseWhitelist.push('body');
    app.use(expressWinston.logger({
      winstonInstance,
      meta: true,
      msg:
          'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
      colorStatus: true,
    }));
  }
};
