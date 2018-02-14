function create_updated_collection(collection_a, object_b) {
  if(!collection_a || !object_b || !Array.isArray(collection_a) || !Object.keys(object_b).length === 0){
    return null;
  }
  let result = JSON.parse(JSON.stringify(collection_a));
  for(let item of result){
    if(object_b.value.includes(item.key)){
      item.count--;
    }
  }
  return result;
}

module.exports = create_updated_collection;
