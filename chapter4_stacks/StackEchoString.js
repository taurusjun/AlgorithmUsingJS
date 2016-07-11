/**
 * Created by I306067 on 7/11/2016.
 */
var Stack=require('./../lib/Stack.js').Stack;

var isEchoString=function (str) {
    
    console.log("in: "+str);
    var stack = new Stack();
    for(var indx=0; indx < str.length; indx++){
        stack.push(str[indx]);
    }
    
    var reversStr=""
    while (stack.length()>0){
        reversStr+=stack.pop();
    }

    console.log("revers: "+reversStr);
    return str===reversStr;
}

console.log(isEchoString('eer'));
console.log(isEchoString('er'));
console.log(isEchoString('ere'));
console.log(isEchoString('erer'));
