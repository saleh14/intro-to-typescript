import * as minimist from 'minimist';

import { DEFAULT_ENCODER } from './encoders';
import { Options, ProcessArgs } from './options';


function minimistAs<T>(args?: string[], options?: minimist.Opts): T & minimist.ParsedArgs {
    return <T & minimist.ParsedArgs>minimist(args, options);
}


export function fromArg(input: string[]): Options {
    var parsedArgs = minimistAs<ProcessArgs>(input, {
        boolean: "decode",
        alias: { encoding: 'e', decode: 'd' },
        default: { encoding: DEFAULT_ENCODER }
    });

    return new Options(parsedArgs._.join(' '), parsedArgs);
}