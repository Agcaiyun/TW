'use strict';
var number_map_to_word_over_26 = function (collection) {
  return collection.map(ele => to_letters(ele));
}

function to_letters(num) {
  if (num < 26) {
    return get_base_letter(num);
  } else {
    return get_round_letter(num);
  }
}

function get_base_letter(num) {
  return String.fromCharCode(96 + num);
}

function get_round_letter(num) {
  let round = Math.floor(num / 26);
  let base = num % 26;
  let base_letter = get_base_letter(base);
  let round_letter = get_base_letter(round);
  let str = round_letter + base_letter;
  return str;
}

module.exports = number_map_to_word_over_26;
