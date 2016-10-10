//Input: sorted arrays of integers
//Output: sorted arras of squares of those integers
//

function sortedSquares(arr){
  var sortedSquares = [];
  var indexA = 0;
  var indexB = arr.length;

  while (indexA < indexB){
    if (Math.abs(arr[indexA]) <  Math.abs(arr[indexB])){
      sortedSquares.push(arr[indexB] * arr[indexB]);
      indexB--;
    } else {
      sortedSquares.push(arr[indexA] * arr[indexA]);
      indexA++;
    }
  }
  
  return sortedSquares.sort();
}
