function processData(input) {
  var array    = input.split('\n');
  var inputMax = parseInt(array.shift());

  var evenArr  = [];
  var oddArr   = [];
  var output   = '';

  for (var inputIndex = 0; inputIndex<inputMax; inputIndex++){
    evenArr = [];
    oddArr  = [];

    array[inputIndex] = array[inputIndex].split(''); 
    for (var count = 0; count < array[inputIndex].length; count++){
      if (count === 0){
        evenArr.push(array[inputIndex][0]);
      } else if(count % 2 === 0){
        evenArr.push(array[inputIndex][count]);
      } else {
        oddArr.push(array[inputIndex][count]);
      }
    }
    if (inputIndex == (inputMax - 1)) {
      output = output.concat(evenArr.join('') + " " + oddArr.join('')); 
    } else {
      output = output.concat(evenArr.join('') + " " + oddArr.join('') + '\n');
    }
  }

  console.log(output);
} 
