function processData(input){
  var array    = input.split('\n');
  var output   = '';

  array.shift();
  array.forEach(function(line){
    var evenIndex = [];
    var oddIndex  = [];

    line = line.split('');
    for(var index=0; index<line.length; index++) {
      index%2 === 0 ? evenIndex.push(line[index]) : oddIndex.push(line[index]);
    }

    output = output.concat(evenIndex.join('') + ' ' + oddIndex.join('') + '\n');
    evenIndex = [];
    oddIndex = [];
  });
  console.log(output.slice(0,-1));
}

