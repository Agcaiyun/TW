function summary_same_elements(collection) {
  let ans = [];
  for(let item of collection){
    if(item.length == 1){
      if(ans.some(ele => ele.name === item)){
        ans.find(ele => ele.name === item).summary++;
      }else{
        ans.push({name:item,summary:1})
      }
    }

    if(item.includes('-')){
      let name = item.split('-')[0];
      let summary = parseInt(item.split('-')[1]);
      special(ans,name,summary);
      
    }

    if(item.includes(':')){
      let name = item.split(':')[0];
      let summary = parseInt(item.split(':')[1]);
      special(ans,name,summary);
    }

    if(item.includes('[')){
      let name = item.split('[')[0];
      let summary = parseInt(item.split('[')[1].substring(0,item.split('[')[1].length - 1));
      special(ans,name,summary);
    } 
  }
  return ans;
}

function special(ans,name,summary){
  if(ans.some(ele => ele.name === name)){
    ans.find(ele => ele.name === name).summary += summary;
  }else{
    ans.push({name:name,summary:summary});
  }
  return ans;
}

module.exports = summary_same_elements;
