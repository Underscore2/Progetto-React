import CryptoJS from "crypto-js"
export const key = process.env.REACT_APP_ENCRYPT_KEY;

export function encrypt(param){
let data = CryptoJS.AES.encrypt(param, key).toString(); // Encryption Part
return data;
}

export function decrypt(param,key){
    let data = CryptoJS.AES.decrypt(param, key).toString(CryptoJS.enc.Utf8);
    return data;
}

