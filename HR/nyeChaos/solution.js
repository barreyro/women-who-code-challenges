function checkChaos(input){
  var data           = input.split('\n');
  var testCasesCount = parseInt(data.shift());

  for (var dataIndex = 0; dataIndex < testCasesCount+1; dataIndex+=2){
    var bribesCount = 0; 
    var maxArrSize = parseInt(data[dataIndex]);
    var lineArr    = data[dataIndex+1].split(' ');

    for (var lineIndex = 0; lineIndex < maxArrSize; lineIndex++){
      var lineValue  = parseInt(lineArr[lineIndex]);
      
      if (lineValue - (lineIndex + 1)> 2){
        console.log('Too chaotic');
        return;
      } else if (lineValue - (lineIndex + 1) > 0){
        bribesCount+= (lineValue - (lineIndex + 1));
      }
    }
    console.log(bribesCount);
  }
}

