'use strict';
const compute_median = require('../../../reduce/compute_median');

var calculate_median = function(collection){
    let evenArr = [];
    for(let index in collection){
        index % 2 !== 0 ? evenArr.push(collection[index]) : null;
    }
    return compute_median(evenArr);
};
module.exports = calculate_median;
