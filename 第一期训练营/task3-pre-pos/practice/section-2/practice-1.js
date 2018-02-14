'use strict';

//重构后
function countSameElements(collection) {
  var ans = [];
  for(let item of collection){
    if(ans.some(ele => ele.key === item)){
      ans.find(ele => ele.key === item).count++;
    }else{
      ans.push({key:item,count:1});
    }
  }
  return ans;
}


/* 
//小波老师
function find(collection,ch){
  for(let item of collection){
    if(item.key === ch){
      return item;
    }
  }
  return null;
}

function countSameElements(collection) {
  let result = [];  //eg.[{key:'a',count:2},{key:'b',count:3}]
  for(let item of collection){
    let obj = find(result,item)
    if(obj){
      obj.count++;
    }else{
      result.push({key:item,count:1});
    }
  }
  return result;
} 
 */


/* 
//the first time
function countSameElements(collection) {
  //return '实现练习要求，并改写该行代码。';

    var a_count = 0;
    var e_count = 0;
    var h_count = 0;
    var t_count = 0;
    var f_count = 0;
    var c_count = 0;
    var g_count = 0;
    var b_count = 0;
    var d_count = 0;
    
  for(var i = 0;i < collection.length;i++){
    
    if('a' == collection[i]){
      a_count++;
    }
    if('e' == collection[i]){
      e_count++;
    }
    if('h' == collection[i]){
      h_count++;
    }
    if('t' == collection[i]){
      t_count++;
    }
    if('f' == collection[i]){
      f_count++;
    }
    if('c' == collection[i]){
      c_count++;
    }
    if('g' == collection[i]){
      g_count++;
    }
    if('b' == collection[i]){
      b_count++;
    }
    if('d' == collection[i]){
      d_count++;
    }

  }
  var obj =  [
      {key: 'a', count: a_count },
      {key: 'e', count: e_count },
      {key: 'h', count: h_count },
      {key: 't', count: t_count },
      {key: 'f', count: f_count },
      {key: 'c', count: c_count },
      {key: 'g', count: g_count },
      {key: 'b', count: b_count },
      {key: 'd', count: d_count }
    ]

    return obj;

  

} */

