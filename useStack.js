/**
 * Created by I306067 on 7/9/2016.
 */
var Stack=require('./Stack.js').Stack;
/******************  Number base convertor      *******************/
var convertor = function (number, base) {
    var s = new Stack();

    while (number!==0) {
        var quotient = Math.floor(number / base);
        var remainder = number % base;
        s.push(remainder);
        number = quotient;
    }
    
    var returnVal="";
    while (s.length()>0){
        returnVal+=s.pop()
    }
    
    return returnVal;
}

console.log(convertor(4,2));