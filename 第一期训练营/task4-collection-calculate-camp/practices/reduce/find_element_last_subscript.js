'use strict';

function calculate_elements_sum(collection, element) {
  if(collection.includes(element)){
    return collection.lastIndexOf(element);
  }
}

module.exports = calculate_elements_sum;
