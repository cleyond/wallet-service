/*
 * @Author: Matheus Rezende
 * @Date: 2018-07-04 19:55:35
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-07-05 14:34:04
 */
import HTTPStatus from 'http-status';
import Joi from 'joi'
import * as ETHServices from '../services/eth.services';

export const validation = {
  validateEthAddress: {
    body: {
      address: Joi.string().required(),
    },
  },
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

