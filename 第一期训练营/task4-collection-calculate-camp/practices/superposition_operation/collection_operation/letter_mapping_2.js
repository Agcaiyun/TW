'use strict';

function average_to_letter(collection) {
  let average = Math.ceil(collection.reduce((pre, curr) => pre + curr) / collection.length);
  return String.fromCharCode(average + 96);
}

module.exports = average_to_letter;

