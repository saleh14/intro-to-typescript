import { base64encode } from "./base64encode";

const input = "Hello World";
const output = "SGVsbG8gV29ybGQ=";

console.log('input: ', input);
console.log('output: ', base64encode(input));
console.log('expected: ', output);