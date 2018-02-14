arr1 =  [5, 3, 7, 1];
arr2 = [2,5,6,7,3];
arrMap(arr1);
arrMap(arr2);

function arrMap(arr){
    // let result = Array.from(arr);
    let result = Array.from(arr);
    result = result.map((ele) => Math.pow(ele,2));
    console.log( '[' + arr + ']' + '-->' + '[' + result + ']');
    // console.log(result);
}