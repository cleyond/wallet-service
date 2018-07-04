/*
 * @Author: Matheus Rezende
 * @Date: 2018-07-04 19:54:44
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-07-04 21:29:33
 */
import bitcore from 'bitcore-lib'
import Request from 'request-promise'

import {CHECK_BALANCE_URL} from '../constants/btc.constants';


/**
 * @function createAddress
 *
 * @returns {String} address String
 */
export const createBitcoreAddress = () => {
  const privateKey = new bitcore.PrivateKey();
  return privateKey.toAddress();
}


/**
 * @function validateAddress
 *
 * @returns {Bool} return if the address is valid
 */
export const validateBitcoreAddress = (address) => bitcore.Address.isValid(address)


/**
 * @function getBalance
 *
 * @returns {Bool} return balance of the account
 */
export const getBalance = (address) =>
  // @TODO: Validate the address before checking and throw error if not valid
  // HOW to validate the address??

  Request(CHECK_BALANCE_URL + address)

