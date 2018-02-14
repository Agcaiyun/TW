'use strict';
function get_integer_interval_2(number_a, number_b) {
    if (number_a === number_b) {
        return number_a % 2 === 0 ? [number_a] : [];
    }
    let result = [];
    for (let i = Math.min(number_a, number_b); i <= Math.max(number_a, number_b); i++) {
        i % 2 === 0 ? result.push(i) : null;
    }
    return number_a < number_b ? result : result.reverse();

}

module.exports = get_integer_interval_2;