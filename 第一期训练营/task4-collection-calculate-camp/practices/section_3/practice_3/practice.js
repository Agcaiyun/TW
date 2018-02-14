const countSameElements = require('../../../practices/section_2/practice_2/practice');

function create_updated_collection(collection_a, object_b) {
  if (!collection_a || !object_b || !Array.isArray(collection_a) || Object.keys(object_b).length === 0) {
    return;
  }
  const valueArr = countSameElements(collection_a);
  let result = JSON.parse(JSON.stringify(valueArr));
  result.forEach(item => {
    if (object_b.value.includes(item.key)) {
      let minus = Math.floor(item.count / 3);
      item.count -= minus;
    }
  });
  return result;
}
module.exports = create_updated_collection;
