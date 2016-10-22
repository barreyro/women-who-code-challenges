function pairSum(arr, sum){
  arr.sort();
  var leftIndex = 0;
  var rightIndex = arr.length - 1;

  while (leftIndex < rightIndex){
    if( arr[leftIndex] + arr[rightIndex] == sum){
      return [ arr[leftIndex], arr[rightIndex] ]; 
    } else if (arr[leftIndex] + arr[rightIndex] < sum){
      leftIndex++;
    } else{
      rightIndex++;
    }
  }

  return false;
}
