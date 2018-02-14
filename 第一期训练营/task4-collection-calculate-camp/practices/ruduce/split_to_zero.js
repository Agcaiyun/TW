'use strict';

function spilt_to_zero(number, interval) {
  let result = [];
  while(number > 0){
    result.push(number);
    number = parseFloat((number - interval).toFixed(1));
  }
  result.push(number);
  return result;
}

module.exports = spilt_to_zero;
