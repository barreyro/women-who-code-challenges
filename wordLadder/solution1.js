function checkPairs(start, end, dict) {
  var output  = [];
  var visited = []; 
  
  function checkDiff(word1, word2){
    if(word1.length != word2.length) return false;
    var diffCount = 0;
    for (var index=0; index < word1.length; index++){
      if (word1[index] != word2[index]) diffCount++;
    }
    return diffCount === 1;
  }

  dict.push(start);

  var dictIndex = 0;
  while (dict.length > 0){
    var nextWord = dict.shift();

  }

  for(var dictIndex = 0; dictIndex < dictIndex.length; dictIndex++){
    
  };

}
