import HTTPStatus from 'http-status';
import * as UtilsServices from '../services/utils.services';

export const createMnemonic = (req, res, next) => {
    try {
      return res.status(HTTPStatus.CREATED).json(UtilsServices.createMnemonic());
    } catch (err) {
      err.status = HTTPStatus.BAD_REQUEST;
      return next(err);
    }
  }
  