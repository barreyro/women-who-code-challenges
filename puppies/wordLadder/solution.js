function checkPairs(start, end, dict){
  var queue   = [];
  var visited = []; 

  queue.push([start, 1]);
  while (queue.length > 0){
    var first       = queue.shift();
    var currentWord = first[0];
    var nextWord    = first[1];

    if (checkDiff(currentWord, end)){
      return nextWord + 1;
    }
  }

  function checkDiff(word1, word2){
    if (word1.length != word2.length){
      return false;
    }
    var diffCount = 0;
    for (var index = 0; index < word1.length; index++){
      if (word1[index] != word2[index]){
        diffCount++;
      }
    }
    return diffCount === 1;
  } 
}


function checkPairs (start, end, dict){
  var output   = [];
  var visited  = [];

  output.push(start);

  function checkDiff(word1, word2){
    if (word1.length != word2.length){
      return false;
    }
    var diffCount = 0;
    for (var index = 1; index < word1.length; index++){
      if (word1[index] != word2[index]) {
        diffCount++;
      }
    }
    return diffCount === 1;
  }
}
