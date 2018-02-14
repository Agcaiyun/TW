function collect_same_elements(collection_a, collection_b) {
  if (!collection_a || !collection_b || !Array.isArray(collection_a) || !Array.isArray(collection_b)) {
    return null;
  }
  let result = [];
  for (let item of collection_a) {
    if (collection_b.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

module.exports = collect_same_elements;
