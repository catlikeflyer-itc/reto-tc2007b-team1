// Priv-Pub key generation
const KeyGen = () => {
    const EncryptRsa = require('encrypt-rsa').default;
    const encryptRsa = new EncryptRsa();
    const { privateKey, publicKey } = nodeRSA.createPrivateAndPublicKeys();
    process.env.PRIVATE_KEY = privateKey;
    process.env.PUBLIC_KEY = publicKey;
}

export { KeyGen };