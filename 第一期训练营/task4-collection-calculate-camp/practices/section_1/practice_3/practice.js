function collect_same_elements(collection_a, object_b) {
  if (!collection_a || !object_b || !Array.isArray(collection_a) || Object.keys(object_b).length === 0 ){
    return null;
  }
  const valueArr = object_b.value;
  let result = [];
  for (let item of collection_a) {
    if (valueArr.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

module.exports = collect_same_elements;
