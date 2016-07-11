/**
 * Created by I306067 on 7/11/2016.
 */
var Stack=require('./../lib/Stack.js').Stack;
/** 4.4 Exercises **/

/** 1- Brace March**/
var isBrachMarch = function (expressionStr) {
    var stack = new Stack();
    var leftBrace = '(';
    var rightBrace = ')';

    for(var idx=0; idx<expressionStr.length;idx++ ){
        if(expressionStr[idx]===leftBrace){
            stack.push(idx);
        }
        else if (expressionStr[idx]===rightBrace){
            if(stack.length()>0){
                stack.pop();
            }else {
                return false;
            }
        }
    }

    return stack.length()===0;
}

console.log(isBrachMarch('2.3 + 23 / 12 + (3.14159×0.24)'));
console.log(isBrachMarch('(()'));
console.log(isBrachMarch(')'));
console.log(isBrachMarch('('));
