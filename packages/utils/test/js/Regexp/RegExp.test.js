import { ZionRegExp } from '@zionstate_js/regexp';

let regexp = ZionRegExp.everythingBetweenDyn('{', '}');
let string = '/users/{user_id}';
let regexp2 = new RegExp('{(.*?)}');
let res1 = string.replace(/\{(.*?)\}/, 'ciao');
let res2 = string.replace(regexp, 'ciao');
console.log(res1);
console.log(res2);
console.log(string);
