import {Router} from 'express';
import validate from 'express-validation';

import * as BTCController from '../controllers/btc.controller';

const routes = new Router();

routes.post(
  '/createAddress/:address',
  BTCController.createAddress,
);

routes.post(
  '/createHDWallet',
  BTCController.createHDWallet,
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
