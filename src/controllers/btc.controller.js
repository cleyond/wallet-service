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

/**
 * @api {post} /btc/createAddress Creates a new address
 * @apiDescription Creates a new address
 * @apiName createaddress
 * @apiGroup BTC
 *
 * @apiSuccess {String} hash Hash key.
 * @apiSuccess {String} type Key type.
 * @apiSuccess {String} network Network key.
 *
 * @apiSuccessExample Success-Response:
 *
 * HTTP/1.1 200 OK
 *
 * {
 *   "hash": "2a1b27929e15c9be0d9dea4c5c777f1c4b6b702e",
 *   "type": "pubkeyhash",
 *   "network": "livenet"
 * }
 *
 * @apiErrorExample {json} Error
 *  HTTP/1.1 400 Bad Request
 *
 */
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


/**
 * @api {post} /btc/validateAddress Validate address
 * @apiDescription Validates an address
 * @apiName validateaddress
 * @apiGroup BTC
 *
 * @apiParam (Body) {String} hash Hash key.
 * @apiParam (Body) {String} type Key type.
 * @apiParam (Body) {String} network Network key.
 *
 * @apiSuccess {Boolean} isValid If the address is valid or not
 *
 * @apiSuccessExample Success-Response:
 *
 * HTTP/1.1 200 OK
 *
 * {
*    "isValid": true,
 * }
 *
 * @apiErrorExample {json} Error
 *  HTTP/1.1 400 Bad Request
 *
 */
export const validateAddress = (req, res, next) => {
  try {
    const responseBody = {isValid: BTCServices.validateBitcoreAddress(req.body)}
    return res.status(HTTPStatus.OK).json(responseBody)
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}


/**
 * @api {get} /btc/balance/:address Address balance
 * @apiDescription Checks given address balance.
 * @apiName balance
 * @apiGroup BTC
 *
 * @apiParam {String} address Address key.
 *
 * @apiSuccess {String} addrStr Address string
 * @apiSuccess {Number} balance Balance
 * @apiSuccess {Number} balanceSat Balance Integer
 * @apiSuccess {Number} totalReceived Total Received
 * @apiSuccess {Number} totalReceivedSat Total Received Integer
 * @apiSuccess {Number} totalSent Total sent
 * @apiSuccess {Number} totalSentSat Total sent Integer
 * @apiSuccess {Number} unconfirmedBalance Unconfirmed balance
 * @apiSuccess {Number} unconfirmedBalanceSat Unconfirmed balance Integer
 * @apiSuccess {Number} unconfirmedTxApperances Unconfirmed Tx Apperances
 * @apiSuccess {Number} txApperances Tx apperances
 * @apiSuccess {Array} transactions Transactions
 *
 * @apiSuccessExample Success-Response:
 *
 * HTTP/1.1 200 OK
 *
 * {
 *   "addrStr": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
 *   "balance": 16.86368063,
 *   "balanceSat": 1686368063,
 *   "totalReceived": 16.86368063,
 *   "totalReceivedSat": 1686368063,
 *   "totalSent": 0,
 *   "totalSentSat": 0,
 *   "unconfirmedBalance": 0,
 *   "unconfirmedBalanceSat": 0,
 *   "unconfirmedTxApperances": 0,
 *   "txApperances": 1283,
 *   "transactions": [
 *     "2bf90ea6393889eba69621416767911ea9b56e2021e983e37603f8723022ade5",
 *     "e3082a6e3edd62391c6ac9120f38811c334e0274817ce430facec337b738ae40",
 *     "49e4a8fd969bf3a4c6d6e9f4e7abf2f802f592b476e2643e98c3ff6eef1f784c",
 *     "14948cc56ca4d31398040b2138be62b8519506bee3c2d94c647193fb823fd20e",
 *     "2eb9f6429e5106247ae443673b2cd11ebf1e3f6dfe22d7cd8018fae820ab4218",
 *   ]
 * }
 *
 * @apiErrorExample {json} Error
 *  HTTP/1.1 400 Bad Request
 *
 */
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
