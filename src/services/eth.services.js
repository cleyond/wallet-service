/*
 * @Author: Matheus Rezende
 * @Date: 2018-07-05 14:29:17
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-07-05 15:39:50
 */

import web3 from '../config/web3'


/**
 * @function validateAddress
 * @param {String} address
 * @returns {Bool} return if the address is valid or not
 */
export const validateEthAddress = (address) => web3.utils.isAddress(address)

/**
 * @function getTxInformation
 * @param {String} txHash
 * @returns {Bool} return if the address is valid or not
 */
export const getTxInformation = async (txHash) => {
  const transaction = await web3.eth.getTransaction(txHash)
  const receipt = await web3.eth.getTransactionReceipt(txHash)
  return {transaction, receipt}
}
