/**
 * Created by I306067 on 7/11/2016.
 */
var Stack=require('./../lib/Stack.js').Stack;
/** 4.4 Exercises **/

/** 3- pez**/
var pez = function (box) {
    var _Red = 'r';
    var _Yellow = 'y';
    var _White = 'w';

    var stack= new Stack();
    for(var i=0; i<box.length; i++){
        if(box[i]!==_Yellow){
            stack.push(box[i]);
        }
    }

    var rStack=new Stack();
    while(stack.length()>0){
        rStack.push(stack.pop());
    };
    var bout='';
    while(rStack.length()>0){
        bout+=rStack.pop();
    };

    return bout;
}

console.log(pez("rywsydsdyy"));