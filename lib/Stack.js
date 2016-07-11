/**
 * Created by I306067 on 7/7/2016.
 */

exports.Stack=function () {
    this.dataStore=[];
    this.top=0;
    this.pop=pop;
    this.push=push;
    this.peak=peak;
    this.length=length;
    this.clear=clear;
}

function pop() {
    return this.dataStore[--this.top];
}

function push(item) {
    this.dataStore[this.top++]=item;
}

function peak() {
    return this.dataStore[this.top-1]
}

function length() {
    return this.top;
}

function clear() {
    this.top=0;
}