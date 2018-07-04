/*
 * @Author: Matheus Rezende
 * @Date: 2018-07-04 19:55:24
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-07-04 21:21:52
 */
/**
 * Post Routes
 */

import {Router} from 'express';
import validate from 'express-validation';

import * as BTCController from '../controllers/btc.controller';

const routes = new Router();

routes.post('/createaddress', BTCController.createAddress);
routes.post('/validateaddress', validate(BTCController.validation.validateAddress), BTCController.validateAddress)
routes.get('/balance/:address', validate(BTCController.validation.balance), BTCController.checkBalance)

export default routes;
