/**
 * Created by I306067 on 7/14/2016.
 */
exports.SCHashTable = SCHashTable;

//SC Hash
function SCHashTable() {
    this.table= new Array(137);
    for(var i=0;i<this.table.length;i++){
        this.table[i]=new Array();
    }
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;

}

function get(key) {
    var pos = this.betterHash(key);
    var index = 0;
    while (this.table[pos][index]!== key){
        index+=2;
    }
    return this.table[pos][index+1];
}

function put(key, data) {
    var pos = this.betterHash(key);
    var index = 0;
    while (this.table[pos][index] !== undefined) {
        index+=2;
    }
    this.table[pos][index] = key;
    this.table[pos][index+1] = data;
}

function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i);
    }
    console.log("Hash value: " + data + " -> " + total);
    return total % this.table.length;
}

function betterHash(string) {
    const H = 37;
    var total = 0;
    for(var i=0; i< string.length; i++){
        total+=H*total+string.charCodeAt(i)
    }
    total = total % this.table.length;
    if(total<0){
        total+=this.table.length-1
    }

    return parseInt(total);
}

function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
        for(var j=0;j<this.table[i].length;j+=2){
            if (this.table[i][j] != undefined) {
                console.log(this.table[i][j] + ": " + this.table[i][j+1]);
            }
        }
    }
}

//SC Hash
function OAHashTable() {
    this.table= new Array(137);
    this.values=[];
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = oaput;
    this.get = oaget;
}

function oaput(key,data) {
    var pos = this.betterHash(key);
    while(this.table[pos]===undefined){
        pos++;
    }
    this.values[pos] = key;
    this.table[pos] = data;
}

function oaget(key) {
    var pos = this.betterHash(key);
    while(this.table[pos]!==undefined && this.table[pos]!== key){
        pos++;
    }
    this.values[pos] = key;
    this.table[pos] = data;
}


/////Test
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new SCHashTable();
for (var i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i],i);
}

hTable.showDistro();
