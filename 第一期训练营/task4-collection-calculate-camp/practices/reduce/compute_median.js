'use strict';

function compute_median(collection) {
  let sortNum = collection.sort((a,b) => a - b);
  let length = sortNum.length;
  return length % 2 === 0 ?
  (sortNum[length / 2] + sortNum[length / 2 - 1]) / 2 :
  sortNum[Math.floor(length / 2)];
}

module.exports = compute_median;


