function count_same_elements(collection) {
  let ans = [];
  for (let item of collection) {
    if (item.length == 1) {
      if (ans.some(ele => ele.key === item)) {
        ans.find(ele => ele.key === item).count++;
      } else {
        ans.push({ key: item, count: 1 });
      }
    } else {
      let key = item.split('-')[0];
      let count = parseInt(item.split('-')[1]);
      if (ans.some(ele => ele.key === key)) {
        ans.find(ele => ele.key === key).count += count;
      } else {
        ans.push({ key: key, count: count });
      }
    }
  }
  return ans;
}

module.exports = count_same_elements;
