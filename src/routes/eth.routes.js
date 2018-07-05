/*
 * @Author: Matheus Rezende
 * @Date: 2018-07-04 19:55:24
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-07-05 14:32:36
 */

import {Router} from 'express';
import validate from 'express-validation';

import * as ETHController from '../controllers/eth.controller';

const routes = new Router();

routes.post(
  '/validate',
  validate(ETHController.validateEthAddress),
  ETHController.validateEthAddress,
);

export default routes;
