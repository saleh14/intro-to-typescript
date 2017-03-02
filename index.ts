import * as minimist from 'minimist';
import { DEFAULT_ENCODER } from './encoders';
import { Options, ProcessArgs } from './options';

var args = <ProcessArgs & minimist.ParsedArgs>minimist(process.argv.slice(2), {
    alias: { encoding: 'e' },
    default: { encoding: DEFAULT_ENCODER }
});

var input = args._.join(' ');
var options = new Options(input, args);

console.log(options);

