/*
 * @Author: Matheus Rezende
 * @Date: 2018-07-04 19:55:35
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-07-04 20:38:58
 */
import HTTPStatus from 'http-status';
import Joi from 'joi'
import * as BTCServices from '../services/btc.services';

export const validation = {
  validateAddress: {
    body: {
      hash: Joi.string().required(),
      type: Joi.string().required(),
      network: Joi.string().required(),
    },
  },
}

export const createAddress = (req, res, next) => {
  try {
    return res.status(HTTPStatus.CREATED).json(BTCServices.createBitcoreAddress())
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}

export const validateAddress = (req, res, next) => {
  try {
    const responseBody = {isValid: BTCServices.validateBitcoreAddress(req.body)}
    return res.status(HTTPStatus.OK).json(responseBody)
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}
