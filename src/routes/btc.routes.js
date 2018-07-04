/*
 * @Author: Matheus Rezende
 * @Date: 2018-07-04 19:55:24
 * @Last Modified by:   @matheusrezende
 * @Last Modified time: 2018-07-04 19:55:24
 */
/**
 * Post Routes
 */

import {Router} from 'express';
// import validate from 'express-validation';

import * as BTCController from '../controllers/btc.controller';

const routes = new Router();

routes.post('/createaddress', BTCController.createAddress);

export default routes;
