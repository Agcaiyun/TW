'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter((ele) => ele % 2 != 0)
    .map((ele) => ele * 3 + 5)
    .reduce((pre, curr) => pre + curr);
}

module.exports = hybrid_operation_to_uneven;

