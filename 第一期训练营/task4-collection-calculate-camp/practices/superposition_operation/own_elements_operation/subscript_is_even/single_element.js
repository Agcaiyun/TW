'use strict';
var grouping_count = require("../../../filter/grouping_count.js");

var single_element = function(collection){
    let evenArr = collection.filter((_,index) => index % 2 !== 0);
    const evenObj = grouping_count(evenArr);
    let result = [];
    for(let prop in evenObj){
        if(evenObj[prop] === 1){
            result.push(parseInt(prop,10));
        }
    }
    return evenArr.filter((item) => result.includes(item) ? true : false);


    // var k = 0;
    // var p = 0;
    // var temp = [];
    // var ans = [];
    // var copy = [];
    // for (var i = 0; i < collection.length; i++) {
    //     if (i % 2 != 0) {
    //         temp[k++] = collection[i];
    //     }        
    // }
    // copy = temp;
    // for (var i = 0; i < temp.length; i++) {
    //     var count = 0;
    //     for (var j = 0; j < copy.length; j++) {
    //         if (temp[i] == copy[j]) {
    //             count++;
    //         }            
    //     }    
    //     if (count == 1) {
    //         ans[p++] = temp[i];
            
    //     }    
    // }
    // return ans;
};
module.exports = single_element;
