/*
 * @Author: Matheus Rezende
 * @Date: 2018-07-04 19:54:44
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-07-04 20:30:51
 */
import bitcore from 'bitcore-lib'


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
 * @returns {Bool} return if the address is valids
 */
export const validateBitcoreAddress = (address) => {
  console.log('-------------------')
  console.log(address)
  console.log('-------------------')
  return bitcore.Address.isValid(address)
}
