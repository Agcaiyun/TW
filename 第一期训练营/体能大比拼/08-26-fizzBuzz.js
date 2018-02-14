/* 给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：
如果这个数被3整除，打印fizz.
如果这个数被5整除，打印buzz.
如果这个数能同时被3和5整除，打印fizz buzz. */


let num = 15;
console.log(fizzBuzz(num));

function fizzBuzz(num) {
    let result = [];
    // for(let index = 0; index < num ; index++){
    //     result.push((index + 1));
    // }
    for (let i = 1; i < num + 1; i++) {
        result[i - 1] = i;
        
        if(i % 3 === 0 ){
            result[i - 1] = 'fizz';
        }
        if(i % 5 === 0){
            result[i - 1] = 'buzz';
        }
        if(i % 3 === 0 && i % 5 === 0){
            result[i - 1] = 'fizzBuzz';
        }
        
        
    }
        return result;
    
}
