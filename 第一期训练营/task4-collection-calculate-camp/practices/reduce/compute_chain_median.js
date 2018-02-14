'use strict';

function compute_chain_median(collection) {
  let arrNum = collection.split('->');
  // 输入为字符串,所以先将字符串转化为 数字
  arrNum = arrNum.map((ele) => parseInt(ele,10)).sort((a,b) => a - b);
  let length = arrNum.length;
  return length % 2 === 0 ?
  (arrNum[length / 2] + arrNum[length / 2 - 1]) / 2 :
  arrNum[Math.floor(length / 2)];
}

module.exports = compute_chain_median;
