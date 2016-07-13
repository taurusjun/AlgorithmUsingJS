/**
 * Created by I306067 on 7/13/2016.
 */

exports.Queue = function () {
    this.dataStore=[];
    this.enqueue=enqueue;
    this.dequeue=dequeue;
    this.front=front;
    this.back=back;
    this.isEmpty=isEmpty;
    this.toString=toString
}

function enqueue(item) {
    this.dataStore.push(item);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length-1];
}

function isEmpty() {
    return this.dataStore.length===0;
}

function toString() {
    var str="";
    for(var i=0;i<this.dataStore.length;i++){
        str+=this.dataStore[i];
    }

    return str;
}