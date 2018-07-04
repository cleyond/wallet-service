/*
 * @Author: Matheus Rezende
 * @Date: 2018-07-04 19:55:35
 * @Last Modified by:   @matheusrezende
 * @Last Modified time: 2018-07-04 19:55:35
 */
import HTTPStatus from 'http-status';
import {createBitcoreAddress} from '../services/btc.services';

export const validation = {

}

export const createAddress = async (req, res, next) => {
  try {
    return res.status(HTTPStatus.CREATED).json(createBitcoreAddress())
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}
