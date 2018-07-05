/*
 * @Author: Matheus Rezende
 * @Date: 2018-07-05 14:29:17
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-07-05 14:30:25
 */

import web3 from '../config/web3'


/**
 * @function validateAddress
 *
 * @returns {Bool} return if the address is valid or not
 */
export const validateEthAddress = (address) => web3.utils.isAddress(address)
