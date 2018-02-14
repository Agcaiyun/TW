'use strict';

function average_uneven(collection) {
  const odd = collection.filter((ele) => ele % 2 !== 0);
  const sum = odd.reduce((pre, curr) => pre + curr);
  return sum / odd.length;

}

module.exports = average_uneven;
