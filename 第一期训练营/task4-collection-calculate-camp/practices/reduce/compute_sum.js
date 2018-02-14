'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((pre,curr) => pre + curr);
}

module.exports = calculate_elements_sum;

