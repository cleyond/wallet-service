import {Router} from 'express';
import * as UtilsController from '../controllers/utils.controller';

const routes = new Router();

routes.post(
    '/mnemonic',
    UtilsController.createMnemonic,
  );

export default routes;