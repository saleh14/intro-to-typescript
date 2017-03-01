import { IEncoder } from './IEncoder';
const KEY_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
const EQUALS = 64;

export var base64encode: IEncoder = function (input: string): string {
    let i = 0;
    let output = "";
    while (i < input.length) {
        let chr1 = input.charCodeAt(i++);
        let chr2 = input.charCodeAt(i++);
        let chr3 = input.charCodeAt(i++);


        let enc1 = chr1 >> 2;
        let enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        let enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        let enc4 = chr3 & 63;


        if (isNaN(chr2)) {
            enc3 = enc4 = EQUALS;
        } else if (isNaN(chr3)) {
            enc4 = EQUALS;
        }


        output = output
            + KEY_STRING.charAt(enc1)
            + KEY_STRING.charAt(enc2)
            + KEY_STRING.charAt(enc3)
            + KEY_STRING.charAt(enc4);

    }

    return output;

} 