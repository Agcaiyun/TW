'use strict';
var calculate_average = function(collection){
    let result = [];
    for(let index in collection){
        index % 2 !== 0 ? result.push(collection[index]) : null;
    }
    return result.reduce((pre,curr) => pre + curr) / result.length;
};
module.exports = calculate_average;
