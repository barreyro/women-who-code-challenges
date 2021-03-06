//Find the most frequent integer in an array
//
function findFrequent(arr){
  if (arr.length === 0){
    alert('you made an empty array');
  } else if (arr.length === 1) {
    return arr[0];
  }
  var counterObj = {}; 
 
  for (var index=0; index<arr.length; index++){
    var currentKey = arr[index];
    if(counterObj[currentKey]){
      counterObj[currentKey] = counterObj[currentKey] + 1;
    } else {
      counterObj[currentKey] = 1;
    }
  }

  var mostFrequent = 0;
  var similarFrequencies = [];
  for (var key in counterObj){
    if (counterObj.hasOwnProperty(key)){ 
      var num = parseInt(key);
      if (mostFrequent === 0){
        similarFrequencies.push(num);
        mostFrequent = num;
      } else if (counterObj[num] > counterObj[mostFrequent]){
        similarFrequencies = [];
        mostFrequent = num;
      } else if(counterObj[num] == counterObj[mostFrequent]){
        similarFrequencies.push(num);
      }
    }
  }

  if (similarFrequencies.length > 0){
    return similarFrequencies;
  } else{
    return mostFrequent;
  }
}
