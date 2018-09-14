import bip39 from 'bip39';

export const createMnemonic = () => {
    const mnemonic = bip39.generateMnemonic();
    const seed = bip39.mnemonicToSeedHex(mnemonic);

    return {
        mnemonic,
        seed
    }
}  