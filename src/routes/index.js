/**
 * API Routes
 */

import {Router} from 'express';
import HTTPStatus from 'http-status';

import BTCRoutes from './btc.routes'
import ETHRoutes from './eth.routes'
import UtilsRoutes from './utils.routes'

import APIError from '../services/error.service';

// Middlewares
import logErrorService from '../services/log.service';

const routes = new Router();

routes.use('/btc', BTCRoutes);
routes.use('/eth', ETHRoutes);
routes.use('/utils', UtilsRoutes);

routes.all('*', (req, res, next) => next(new APIError('Not Found!', HTTPStatus.NOT_FOUND, true)));

routes.use(logErrorService);

export default routes;
