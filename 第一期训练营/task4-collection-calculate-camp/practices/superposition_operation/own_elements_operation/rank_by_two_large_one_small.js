'use strict';
function rank_by_two_large_one_small(collection) {
  let resultArr = Array.from(collection);
  resultArr.sort((a, b) => a - b);
  for (let i = 0, j = 0; j < Math.floor(resultArr.length / 3); i += 3) {
    [resultArr[i], resultArr[i + 1], resultArr[i + 2]] = [resultArr[i + 1], resultArr[i + 2], resultArr[i]];
    j++;
  }
  return resultArr;
}
module.exports = rank_by_two_large_one_small;
