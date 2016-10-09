function findFrequent(arr){
  var length = arr.length;
  if (length === 0){
    alert('you made an empty array');
  } else if (length === 1){
    return arr[0];
  }

  var frequency = {};
  var currentFrequency = 0;
  var output = [];

  for (var index = 0; index < length; index++){
    var currentKey = arr[index];
    if(currentFrequency === 0){
      frequency[currentKey] = 1;
      output.push(currentKey);
      currentFrequency = 1;
    } else if(!frequency[currentKey] && (currentFrequency == 1)){
      frequency[currentKey] = 1;
      output.push(currentKey);
    } else if (!frequency[currentKey]){
      frequency[currentKey] = 1;
    } else if ((frequency[currentKey] + 1 ) > currentFrequency){ 
      frequency[currentKey]++;
      currentFrequency++;
      output = [currentKey];
    } else if((frequency[currentKey] +1) == currentFrequency){
      frequency[currentKey]++;
      output.push(currentKey);
    } else {
      frequency[currentKey]++;
    }
  }

  return output;
}
