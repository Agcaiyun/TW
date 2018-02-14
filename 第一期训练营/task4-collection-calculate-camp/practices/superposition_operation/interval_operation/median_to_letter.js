'use strict';

const compute_median = require('../../reduce/compute_median');
const to_letter = require('../../to_letters/to_letters.js');


function median_to_letter(collection) {
  return to_letter(Math.ceil(compute_median(collection)));
}


module.exports = median_to_letter;
