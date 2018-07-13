/*
 * @Author: Matheus Rezende
 * @Date: 2018-07-04 19:55:24
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-07-05 13:43:06
 */

import {Router} from 'express';
import validate from 'express-validation';

import * as BTCController from '../controllers/btc.controller';

const routes = new Router();

routes.post(
  '/createAddress',
  BTCController.createAddress,
);

routes.post(
  '/validateAddress',
  validate(BTCController.validation.validateAddress),
  BTCController.validateAddress,
);

routes.get(
  '/balance/:address',
  validate(BTCController.validation.checkBalance),
  BTCController.checkBalance,
);

export default routes;
