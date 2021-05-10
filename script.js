/*assuming our input varibles are already set, we can do it all - defining the varible and determining what the value should be with an IF statement, in one elegent line of code,using the TENAERY operator: Let someVarible = testCondtion?valueIftrue:valueIfFalse;*/


/* try changing the vaules and get different results from the 'TENAERY operator' */
let a = 10;
let b = 20;

/* i have created the TERNARY operator below */
let result = (a < b ) ? "a is smaller" : "a is not smaller";

/* if 'a' is less than 'b', 'result' should be string 'a is smaller', otherwise result should be 'a is not smaller'. */

console.log (result);