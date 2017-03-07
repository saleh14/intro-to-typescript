import { fromArg } from './OptionParser';

var opt = fromArg(process.argv.slice(2));


console.log('INPUT: ', opt.input);
console.log('ENCODING: ', opt.encoding);
console.log('RESULT: ', opt.decode ? opt.encoder.decode(opt.input) : opt.encoder.encode(opt.input));

