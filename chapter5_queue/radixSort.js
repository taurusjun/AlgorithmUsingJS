/**
 * Created by I306067 on 7/13/2016.
 */
var Queue=require("../lib/Queue.js").Queue;

var radixSort = function (numberArray) {
    var n1Array = sortByRadix(numberArray,10);
    var n2Array =sortByRadix(n1Array,100);

    return n2Array;
}

function sortByRadix(numberArray, radix) {
    var queues=[];
    for(var idx=0;idx<numberArray.length;idx++){
        var num = numberArray[idx];
        var digit = num % radix;
        var queue = queues [digit];
        if(queue === undefined){
            queue = new Queue();
            queues[digit] = queue;
        }
        queue.enqueue(num);
    }

    var sortedArray = [];
    for(var sidx=0; sidx<queues.length; sidx++){
        var q = queues[sidx];
        if(q!== undefined){
            while (!q.isEmpty()){
                sortedArray.push(q.dequeue());
            }
        }
    }

    return sortedArray;
}

console.log(radixSort([91,46,85,15,92,35,31,22]))