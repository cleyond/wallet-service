import HTTPStatus from 'http-status';
import Joi from 'joi'
import * as ETHServices from '../services/eth.services';

export const validation = {
  validateEthAddress: {
    body: {
      address: Joi.string().required(),
    },
  },
  getTxInfo: {
    params: {
      txHash: Joi.string().required(),
    },
  },
}

export const createHDWallet = (req, res, next) => {
  try {
    return res.status(HTTPStatus.CREATED).json(ETHServices.createHDWallet())
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}

export const createHDWalletNode = (req, res, next) => {
  try {
    const { xpriv } = req.params;
    return res.status(HTTPStatus.CREATED).json(ETHServices.createHDWalletNode(xpriv));
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}

export const validateEthAddress = (req, res, next) => {
  try {
    const responseBody = {isValid: ETHServices.validateEthAddress(req.body.address)}
    return res.status(HTTPStatus.OK).json(responseBody)
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}

export const getTxInfo = async (req, res, next) => {
  try {
    const result = await ETHServices.getTxInformation(req.params.txHash)
    return res.status(HTTPStatus.OK).json(result)
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}

