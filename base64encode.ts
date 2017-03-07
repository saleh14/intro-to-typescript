import { IEncoder } from './IEncoder';

export var base64encoder: IEncoder = {
    encode: function (value: string): string {
        return new Buffer(value).toString('base64');
    },
    decode: function (value: string): string {
        return new Buffer(value).toString('base64');
    }
} 