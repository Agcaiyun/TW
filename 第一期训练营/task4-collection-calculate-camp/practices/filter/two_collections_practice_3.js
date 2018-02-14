'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let result = [];
  for (let item of collection_a) {
    collection_b.some((ele) => item % ele === 0) ? result.push(item) : null;
  }
  return result;
}

module.exports = choose_divisible_integer;
