import { IEncoder } from './IEncoder';
import { encoders } from './encoders';

export interface ProcessArgs {
    readonly encoding: string;
    readonly decode: boolean;
}

export class Options implements ProcessArgs {
    readonly encoding: string;
    readonly encoder: IEncoder;
    readonly decode: boolean;

    constructor(public readonly input: string, args: ProcessArgs) {
        this.encoding = args.encoding;
        this.encoder = encoders[this.encoding];
        this.decode = args.decode;
    }
}