import { JSEncrypt } from "jsencrypt";

export function rsa_encrypt(alphanumeric) {
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(process.env.RSA_PUBLIC_KEY);
    
    return encrypt.encrypt(alphanumeric);
}

export function rsa_decrypt(encrypted) {
    var decrypt = new JSEncrypt();
    decrypt.setPrivateKey(process.env.RSA_PRIVATE_KEY);
    
    return decrypt.decrypt(encrypted);
}

