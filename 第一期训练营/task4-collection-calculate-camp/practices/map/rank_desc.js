'use strict';

var rank_desc = function(collection){
    let result = Array.from(collection)
    return result.sort((a,b) => a - b);
}

module.exports = rank_desc;
