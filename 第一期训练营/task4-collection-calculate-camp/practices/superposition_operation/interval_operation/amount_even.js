'use strict';

function amount_even(collection) {
  return collection.filter((ele) => ele % 2 === 0)
    .reduce((pre, curr) => pre + curr);

}

module.exports = amount_even;
