'use strict';

//重构后
function countSameElements(collection) {
  let ans = [];
  for(let item of collection){
    if(item.length == 1){
      if(ans.some(ele => ele.key === item)){
        ans.find(ele => ele.key === item).count++;
      }else{
        ans.push({key:item,count:1});
      }
    }else{
      let key = item.split('-')[0];
      let count = parseInt(item.split('-')[1]);
      if(ans.some(ele => ele.key === key)){
        ans.find(ele => ele.key === key).count += count;
      }else{
        ans.push({key:key,count:count});
      }
    }
  }
  return ans;
}


/* 
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
    var temp;
    
    for(var i = 0;i < collection.length;i++){
      if(collection[i].length == 1){
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
    
      }else{
         temp = collection[i].slice(0,1) ;
            if('a' == temp){
              a_count  += parseInt( collection[i].slice(2) );
            }
            if('e' == temp){
              e_count += parseInt( collection[i].slice(2) );
            }
            if('h' == temp){
              h_count += parseInt( collection[i].slice(2) );
            }
            if('t' == temp){
              t_count += parseInt( collection[i].slice(2) );
            }
            if('f' == temp){
              f_count += parseInt( collection[i].slice(2) );
            }
            if('c' == temp){
              c_count += parseInt( collection[i].slice(2) );
            }
            if('g' == temp){
              g_count += parseInt( collection[i].slice(2) );
            }
            if('b' == temp){
              b_count += parseInt( collection[i].slice(2) );
            }
            if('d' == temp){
              d_count += parseInt( collection[i].slice(2) ) ; 
            }
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
}

 */

