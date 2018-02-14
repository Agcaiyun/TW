function to_letters(num) {
    let result = [];
    if (num % 26 === 0) {
        result.push("z");
        num > 26 ? result.unshift(String.fromCharCode(Math.floor(num / 26) + 95)) : null;
    }else{
        result.push(String.fromCharCode(num % 26 + 96));
        num > 26 ? result.unshift(String.fromCharCode(Math.floor(num / 26) + 96)) : null;
    }
    return result.join("");
}
module.exports = to_letters;

// function to_letters(num) {
//     if (num < 27) {
//         return base_letter(num);
//     } else {
//         return round_letter(num);
//     }
// }

// function base_letter(num) {
//     let base = String.fromCharCode(96 + num);
//     return base;
// }

// function round_letter(num) {
//     let base_num = num % 26;
//     let round_num = Math.floor(num / 26);
//     let base_letters = base_letter(base_num); 
//     //处理 52 / 26 = 2 ..0 之类的类似问题
//     if (base_num == 0) {
//         base_letters = 'z';
//         round_num -= 1;
//     }
//     let round_letters = base_letter(round_num);
//     let str = round_letters + base_letters;
//     return str;
// }