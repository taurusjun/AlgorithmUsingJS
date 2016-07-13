/**
 * Created by i306067 on 6/21/2016.
 */
  function aF(fn) {
    return function () {
        return fn.apply(this,arguments);
    }
  }

function bF(itm) {
    console.log(itm);
    this.cF=function () {
        var proto=new this(arguments);
    }
}


function prt(str) {
    console.log(str);
}
//var a=new aF(prt)

//a('AA')

(function () {
    this.Class=function () {var id=1;};
    Class.extend=function (prop) {
        var prot = new this();
        console.log('aa');
    }
})();

// (function(){
//     var initializing = false;
//     // The base Class implementation (does nothing)
//     this.Class = function(){};
//
//     // Create a new Class that inherits from this class
//     Class.extend = function(prop) {
//         initializing = true;
//         var prototype = new this();
//         initializing = false;
//
//     };
// })();

Class.extend({a:'bb'});

