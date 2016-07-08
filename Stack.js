/**
 * Created by I306067 on 7/7/2016.
 */

stack=function () {
    this.dataStore=[];
    this.top=0;
    this.pop=pop;
    this.push=push;
    this.peak=peak;
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