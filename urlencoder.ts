import { IEncoder } from './IEncoder';

export var urlencoder: IEncoder = {
    encode: function (value: string): string {
        return encodeURI(value);
    },
    decode: function(value:string):string{
        return decodeURI(value);
    }
} 