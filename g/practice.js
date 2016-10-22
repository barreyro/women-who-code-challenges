//[1] Given an array of integers, determine whether or not there exist two elements in the array (at different positions) 
//whose sum is equal to some target value. Examples: [5, 4, 2, 4], 8 --> true [5, 1, 2, 4], 8 --> false 

function pairSums(arr, sum) {
  arr.sort();
  var rightIndex = 0; 
  var leftIndex = arr.length - 1; 

  while (rightIndex < leftIndex) {
    if (arr[rightIndex] + arr[leftIndex] == sum) {
      return true; 
    } else if (arr[rightIndex] + arr[leftIndex] <  sum) {
      rightIndex++;
    } else {
      leftIndex--;
    }
  }
  return false;
}



//[2] Implement a set-like data structure that supports Insert, Remove, and GetRandomElement efficiently. Example: If you insert the elements 1, 3, 6, 8 and remove 6, the structure should contain [1, 3, 8]. Now, GetRandom should return one of 1, 3 or 8 with equal probability.  

function Set() {
  this.intArray = [];
}

Set.prototype.insert = function(int) {
  this.intArray.push(int);
};

Set.prototype.remove = function(int) {
  var index = this.intArray.indexOf(int);
  this.intArray.splice(index, 1);
};

Set.prototype.getRandomElement = function() {
  var length   = this.intArray.length - 1;
  var arrIndex = Math.round(Math.random(0) * length);
  return this.intArray[arrIndex];
};

