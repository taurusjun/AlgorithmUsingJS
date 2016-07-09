/**
 * Created by I306067 on 7/7/2016.
 */
var Stack=require('./Stack.js').Stack;

var m=new Stack();
m.push('a');
m.push('b');
m.push('c');
m.push('d');
m.push('e');
m.push('f');
m.clear();
console.log(m.length());
console.log(m.peak());
console.log(m.top);

console.log(m.pop());
console.log(m.top);