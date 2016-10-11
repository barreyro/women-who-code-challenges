//find the first non-repeated character in a string

var nonRepeat = function (string) {
  var arr       = string.split('');
  var hashCount = {};
  var result = 0;
  for (var index = 0 ; index< arr.length ; index++){
    var currentKey = arr[index];
    !hashCount[currentKey] ? hashCount[currentKey] = 1 : hashCount[currentKey]++;
  }

  for (var key in hashCount){
    if (hashCount.hasOwnProperty(key)){
      if (hashCount[key] == 1) {
        return key;
      }
    }
  }
  return result;
};
