var checkPairSum = function(array, sumInt) {
  var leftIndex = 0;
  var rightIndex = (array.length - 1);
  var found = false;

  if (array.length < 2){
    return found;
  } else if(array[leftIndex] + array[rightIndex] == sumInt) {
    return found;
  } else {
    checkArray();
    return found;
  }

  function checkArray() {
    array.sort();
    while (array[leftIndex] < array[rightIndex]) {
      if(array[leftIndex] + array[rightIndex] == sumInt){
        found = true;
        break;
      } else if(array[leftIndex] + array[rightIndex] < sumInt){
        leftIndex++;
      } else {
        rightIndex--;
      }
    }
  }
};
