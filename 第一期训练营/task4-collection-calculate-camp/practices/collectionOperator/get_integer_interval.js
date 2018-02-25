'use strict';
function get_integer_interval(number_a, number_b) {
    if (number_a === number_b) {
        return [number_a];
    }
    
    let result = [];
    for (let index = Math.min(number_a, number_b); index <= Math.max(number_a, number_b); index++) {
        result.push(index);
    }
    return number_a < number_b ? result : result.reverse();
}

module.exports = get_integer_interval;

