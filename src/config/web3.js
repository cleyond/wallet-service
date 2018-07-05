import Web3JS from 'web3'
import constants from './constants'


// Connect web3js to the given provider
export default new Web3JS(new Web3JS.providers.HttpProvider(constants.ETH_NETWORK))
