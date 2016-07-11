/**
 * Created by I306067 on 7/11/2016.
 */
var Stack=require('./../lib/Stack.js').Stack;
/** 4.4 Exercises **/

/** 2- op1 op2 operator: Exp convert and eval**/
var exprEval = function (expression) {
    var operatorAdd = '+';
    var operatorMinus = '-';
    var operatorMultipy = '*';
    var operatorDivision = '/';

    var operandStack = new Stack();
    var tempStack = new Stack();
    var operatorStack = new Stack();

    for(var idx=0; idx<expression.length; idx++){
        var ch = expression[idx];
        if(ch===operatorAdd || ch===operatorMinus || ch===operatorMultipy || ch===operatorDivision ){
            operatorStack.push(ch);
            while (tempStack.length()){
                operandStack.push(tempStack.pop());
            }
        }else {
            tempStack.push(ch);
        }
    }
}