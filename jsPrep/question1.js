//Given an arr of ints, determine whether or not there exists 2 elemnts in the
//elements in the array (at different positions) whose sum is equal to some 
//target value. 
//Example: [5,4,2,4], 8 -> true 
//Example: [5,1,2,4], 8 -> false
//
function checkPairs(array, sumInt){
  array.sort();
  var leftIndex  = 0;
  var rightIndex = array.length; 

  while(leftIndex < rightIndex){
    if (array[leftIndex] + array[rightIndex] === sumInt){
      return true;
    } else if((array[leftIndex] + array[rightIndex]) < sumInt) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }
}
