/*
 * @Author: Matheus Rezende
 * @Date: 2018-06-20 23:00:13
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-07-04 19:48:01
 */
/**
 * API Routes
 */

import {Router} from 'express';
import HTTPStatus from 'http-status';

import BTCRoutes from './btc.routes'

import APIError from '../services/error.service';

// Middlewares
import logErrorService from '../services/log.service';

const routes = new Router();

routes.use('/btc', BTCRoutes);


routes.all('*', (req, res, next) => next(new APIError('Not Found!', HTTPStatus.NOT_FOUND, true)));

routes.use(logErrorService);

export default routes;
