'use strict';
function get_letter_interval_2(number_a, number_b) {
  //得到数字展开后的数组
  let result = [];
  let num_array = [];
  if (number_a === number_b) {
    num_array.push(number_a);
  } else {
    for (let i = Math.min(number_a, number_b); i <= Math.max(number_a, number_b); i++) {
      num_array.push(i);
    }
    number_a < number_b ? num_array : num_array.reverse();
  }

  //将数组中的数字转化为 字母
  result = num_array.map(ele => to_letters(ele));

  return result;
}

function to_letters(num) {
  let result = [];
  if (num % 26 === 0) {
    result.push("z");
    num > 26 ? result.unshift(String.fromCharCode(Math.floor(num / 26) + 95)) : null;
  } else {
    result.push(String.fromCharCode(num % 26 + 96));
    num > 26 ? result.unshift(String.fromCharCode(Math.floor(num / 26) + 96)) : null;
  }
  return result.join("");
}


// function to_letters(num) {
//   if (num < 27) {
//     return base_letter(num);
//   } else {
//     return round_letter(num);
//   }
// }

// function base_letter(num) {
//   let base = String.fromCharCode(96 + num);
//   return base;
// }

// function round_letter(num) {
//   let base_num = num % 26;
//   let round_num = Math.floor(num / 26);
//   let base_letters = base_letter(base_num);
//   //处理 52 / 26 = 2 ..0 之类的类似问题
//   if (base_num == 0) {
//     base_letters = 'z';
//     round_num -= 1;
//   }
//   let round_letters = base_letter(round_num);
//   let str = round_letters + base_letters;
//   return str;
// }
module.exports = get_letter_interval_2;

