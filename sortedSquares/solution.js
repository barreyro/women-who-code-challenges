//Input: sorted arrays of integers
//Output: sorted arras of squares of those integers


function sortSquares (arr){
  var sortedSquares = [];
  var count = 0;

  while(arr[count] < 0){
    arr[count] = arr[count] * -1;
    count++;
  }

  arr.sort();

  for(var index=0; index < arr.length; index++){
    sortedSquares.push(arr[index] * arr[index]);
  }

  return sortedSquares;
}
