import bitcore from 'bitcore-lib'
import Request from 'request-promise'

import {CHECK_BALANCE_URL} from '../constants/btc.constants';

var HDPrivateKey = bitcore.HDPrivateKey;

/**
 * @function createAddress
 *
 * @returns {String} address String
 */
export const createBitcoreAddress = (address) => {
  const privateKey = new bitcore.PrivateKey();

  HDPrivateKey

  return privateKey.toAddress();
}

/**
 * @function createHDWallet
 *
 * @returns {String} address String
 */
export const createHDWallet = () => {
  const privateKey = new bitcore.PrivateKey();
  return {
    wif: privateKey.toWIF(), 
    address: privateKey.toAddress()
  };
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

