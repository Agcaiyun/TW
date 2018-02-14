'use strict';

var number_map_to_word = function (collection) {
  return collection.map(ele => String.fromCharCode(ele + 96));
}

module.exports = number_map_to_word;
