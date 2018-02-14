function count_same_elements(collection) {
  if (!collection || !Array.isArray(collection)) {
    return null;
  }
  let result = [];
  for (let item of collection) {
    if (result.some((ele) => ele.key === item)) {
      result.find((ele) => ele.key === item).count++;
    } else {
      result.push({
        key: item,
        count: 1
      })
    }
  }
  return result;
}

module.exports = count_same_elements;
