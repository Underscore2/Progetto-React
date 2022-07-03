import CryptoJS from "crypto-js"
export const key = "2e35f2lkdhsoihjgio7eeb74aabc37d5e5d05";

export function encrypt(param){
let data = CryptoJS.AES.encrypt(param, key).toString(); // Encryption Part
return data;
}

export function decrypt(param,key){
    let data = CryptoJS.AES.decrypt(param, key).toString(CryptoJS.enc.Utf8);
    return data;
}