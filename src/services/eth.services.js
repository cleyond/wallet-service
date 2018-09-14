import web3 from '../config/web3';
import { months } from 'moment';

import hdkey from 'ethereumjs-wallet/hdkey';
import bip39 from 'bip39';

/**
 * @function validateAddress
 * @param {String} address
 * @returns {Bool} return if the address is valid or not
 */
export const createHDWallet = () => {
  const mnemonic = bip39.generateMnemonic();
  const hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));

  return {
    mnemonic,
    xpriv: hdwallet.privateExtendedKey(),
    xpub: hdwallet.publicExtendedKey(),
  };
}

export const createHDWalletNode = (masterKey) => {
  const hdwallet = hdkey.fromExtendedKey(masterKey);

  const path = "m/44'/60'/0'/0/0";

  const wallet = hdwallet.derivePath(path).getWallet();
  return {
    addr: wallet.getAddressString(),
    xpriv: wallet.getPrivateKeyString(),
    xpub: wallet.getPublicKeyString(),
  }

}

export const deriveChild = () => {

  var path = "m/44'/60'/0'/0/0";

  var wallet = hdwallet.derivePath(path).getWallet();
  var address = "0x" + wallet.getAddress().toString("hex");
  
  console.log(hdwallet);  
  console.log(wallet);  

  return {
    mnemonic,
    address,

  }
}

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
