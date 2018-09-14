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
  checkBalance: {
    params: {
      address: Joi.string().required(),
    },
  },
}

export const createAddress = (req, res, next) => {
  try {
    return res.status(HTTPStatus.CREATED).json(BTCServices.createBitcoreAddress(req.params.address))
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}

export const createHDWallet = (req, res, next) => {
  try {
    return res.status(HTTPStatus.CREATED).json(BTCServices.createHDWallet())
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

export const checkBalance = async (req, res, next) => {
  try {
    const {address} = req.params
    const result = await BTCServices.getBalance(address)
    if (result) {
      return res.status(HTTPStatus.OK).json(JSON.parse(result))
    }
    return res.status(HTTPStatus.NO_CONTENT).json(JSON.parse(result))
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}
