'use strict';

function compute_average(collection) {
let sum = collection.reduce((pre,curr) => pre + curr);
return sum / collection.length;
}

module.exports = compute_average;

