'use strict';

function hybrid_operation(collection) {
  return collection.map((ele) => ele * 3 + 2).reduce((pre, curr) => pre + curr);
}

module.exports = hybrid_operation;

