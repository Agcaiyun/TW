'use strict';

function grouping_count(collection) {
  let result = {};
  for (let item of collection) {
    if (result[item.toString()]) {
      ++result[item.toString()];
    } else {
      result[item.toString()] = 1;
    }
  }
  return result;
}

module.exports = grouping_count;
