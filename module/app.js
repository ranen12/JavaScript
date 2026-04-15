import { add, multiply } from './math.js';
console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6

import greet from './greet.js';
console.log(greet('로키'));

import getUserName,{age} from './user.js';
console.log(getUserName());
console.log(age);