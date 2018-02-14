'use strict';

function double_to_one(collection) {
  let result = [];
  for (let item of collection) {
    Array.isArray(item) ? result.push(...item) : result.push(item);
  }
  return result;
}

module.exports = double_to_one;
