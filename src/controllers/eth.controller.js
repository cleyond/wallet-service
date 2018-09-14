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

/**
 * @api {post} /eth/validate Validate address
 * @apiDescription Validates an address
 * @apiName validateaddress
 * @apiGroup ETH
 *
 * @apiParam (Body) {String} address Address.
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
export const validateEthAddress = (req, res, next) => {
  try {
    const responseBody = {isValid: ETHServices.validateEthAddress(req.body.address)}
    return res.status(HTTPStatus.OK).json(responseBody)
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}


/**
 * @api {get} /eth/tx/:txHash transaction information
 * @apiDescription Returns the transaction information
 * @apiName txInfo
 * @apiGroup ETH
 *
 * @apiParam {String} txHash Transaction Hash.
 *
 * @apiSuccess {Object} transaction
 * @apiSuccess {Object} receipt
 *
 * @apiSuccessExample Success-Response:
 *
 * HTTP/1.1 200 OK
 *
 * {
 *
 *   "transaction": {
 *       "blockHash": "0xa1903cc142cb7570756a9bf77bfeca0087d0df4f378d5671f761fe2fe238e2dd",
 *       "blockNumber": 2580655,
 *       "from": "0x54C4d74ddaDA2D80B09082c5F02580B1CfEc5DF4",
 *       "gas": 800000,
 *       "gasPrice": "5000000000",
 *       "hash": "0x5049a33f383eaed88b4f9fec11b6ebeb02e4303bfc7e06a462d5bdc50fbda244",
 *       "input": "0xd73dd6230000000000000000000000009c9659aa16e18c4a8c54020cf20344204ea8468f000000000000000000000000000000000000000000000000000000000009218a",
 *       "nonce": 1692,
 *       "to": "0x98d9A611Ad1b5761bdC1dAAc42c48E4d54CF5882",
 *       "transactionIndex": 3,
 *       "value": "0",
 *       "v": "0x1b",
 *       "r": "0x301a82df371a8f815057a32c11e2abc7a25f9830566464918c3a86e842d93c2a",
 *       "s": "0x2164b9aabe404c591f0ff155dec46b4ed80e3456cc7133e40058d7362b5484bc"
 *   },
 *   "receipt": {
 *       "blockHash": "0xa1903cc142cb7570756a9bf77bfeca0087d0df4f378d5671f761fe2fe238e2dd",
 *       "blockNumber": 2580655,
 *       "contractAddress": null,
 *       "cumulativeGasUsed": 288554,
 *       "from": "0x54c4d74ddada2d80b09082c5f02580b1cfec5df4",
 *       "gasUsed": 31566,
 *       "logs": [
 *           {
 *               "address": "0x98d9A611Ad1b5761bdC1dAAc42c48E4d54CF5882",
 *               "topics": [
 *                   "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
 *                   "0x00000000000000000000000054c4d74ddada2d80b09082c5f02580b1cfec5df4",
 *                   "0x0000000000000000000000009c9659aa16e18c4a8c54020cf20344204ea8468f"
 *               ],
 *               "data": "0x0000000000000000000000000000000000000000000000000000000000c2f4f2",
 *               "blockNumber": 2580655,
 *               "transactionHash": "0x5049a33f383eaed88b4f9fec11b6ebeb02e4303bfc7e06a462d5bdc50fbda244",
 *               "transactionIndex": 3,
 *               "blockHash": "0xa1903cc142cb7570756a9bf77bfeca0087d0df4f378d5671f761fe2fe238e2dd",
 *               "logIndex": 3,
 *               "removed": false,
 *               "id": "log_42577404"
 *           }
 *       ],
 *       "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000200200000000080000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000020000000000000000000000004000010000000000000000000000000000000000000000000000100000000000000",
 *       "status": true,
 *       "to": "0x98d9a611ad1b5761bdc1daac42c48e4d54cf5882",
 *       "transactionHash": "0x5049a33f383eaed88b4f9fec11b6ebeb02e4303bfc7e06a462d5bdc50fbda244",
 *       "transactionIndex": 3
 *   }
 *
 * }
 *
 * @apiErrorExample {json} Error
 *  HTTP/1.1 400 Bad Request
 *
 */
export const getTxInfo = async (req, res, next) => {
  try {
    const result = await ETHServices.getTxInformation(req.params.txHash)
    return res.status(HTTPStatus.OK).json(result)
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}

