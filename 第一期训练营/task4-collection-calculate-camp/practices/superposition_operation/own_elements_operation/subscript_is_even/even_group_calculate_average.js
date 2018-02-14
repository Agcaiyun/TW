'use strict';
var even_group_calculate_average = function (collection) {
    const evenArr = collection.filter(ele => ele % 2 === 0);
    const oneth = evenArr.filter(ele => 1 <= (ele / 1) && (ele / 1) < 9);
    const tenth = evenArr.filter(ele => 1 <= (ele / 10) && (ele / 10) < 9);
    const hundredth = evenArr.filter(ele => 1 <= (ele / 100) && (ele / 100) < 9);
    if (evenArr.length === 0) {
        return [0];
    }
    const oneTotal = oneth.reduce((pre, curr) => pre + curr, 0);
    const oneAve = Math.floor(oneTotal / oneth.length);
    const tenTotal = tenth.reduce((pre, curr) => pre + curr, 0);
    const tenAve = Math.floor(tenTotal / tenth.length);
    const hundredTotal = hundredth.reduce((pre, curr) => pre + curr, 0);
    const hundredAve = Math.floor(hundredTotal / hundredth.length);
    if (oneAve && oneAve > 0 && tenAve && tenAve > 0 && hundredAve && hundredAve > 0) {
        return [oneAve, tenAve, hundredAve];
    }
    if (!oneAve && !tenAve && hundredAve && hundredAve > 0) {
        return [hundredAve];
    }
};


// var even_group_calculate_average = function (collection) {
//     var odd_index = [];
//     var k = 0;
//     var temp = [];
//     var t = 0;
//     var ans = [];
//     var count = 0;
//     var sum_1 = 0;
//     var sum_2 = 0;
//     var sum_3 = 0;
//     var ave_1 = 0;
//     var ave_2 = 0;
//     var ave_3 = 0;
//     var count_1 = 0;
//     var count_2 = 0;
//     var count_3 = 0;

//     for (var i = 0; i < collection.length; i++) {
//         if (i % 2 != 0) {
//             odd_index[k++] = collection[i];
//         }
//     }

//     for (var i = 0; i < odd_index.length; i++) {
//         if (odd_index[i] % 2 == 0) {
//             temp[t++] = odd_index[i];
//             count++;
//         }
//     }

//     if (count == 0) {
//         ans[0] = 0;
//     } else {
//         for (var i = 0; i < temp.length; i++) {
//             if (parseInt(temp[i] / 10) == 0) {
//                 sum_1 += temp[i];
//                 count_1++;
//             } else {
//                 if (parseInt(temp[i] / 100) == 0) {
//                     sum_2 += temp[i];
//                     count_2++;
//                 } else {
//                     if (parseInt(temp[i] / 1000) == 0) {
//                         sum_3 += temp[i];
//                         count_3++;
//                     }
//                 }
//             }
//         }
//     }
//     if (count_1 == 0 && count_2 == 0 && count_3 != 0) {
//         ans[0] = parseFloat(sum_3 / count_3);
//     }

//     if (count_1 != 0 && count_2 != 0 && count_3 != 0) {
//         ans[0] = parseFloat(sum_1 / count_1);
//         ans[1] = parseFloat(sum_2 / count_2);
//         ans[2] = parseFloat(sum_3 / count_3);
//     }

//     return ans;
// };
module.exports = even_group_calculate_average;
