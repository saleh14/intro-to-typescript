import { base64encoder } from "./base64encode";
import { urlencoder } from "./urlencoder";
import * as minimist from 'minimist';

const input = "Hello World";
const base64Output = "SGVsbG8gV29ybGQ=";
const urlOutput = "Hello%20World";

console.log('input: ', input);

console.log('base64 output: ', base64encoder.encode(input));
console.log('base64 expected: ', base64Output);

console.log('url output: ', urlencoder.encode(input));
console.log('url expected: ', urlOutput);