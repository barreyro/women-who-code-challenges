var caesarCipher = function(string, key){
  var stringArray = string.toUpperCase().split('');
  var alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
  var newString = [];  

  for (count = 0; count < stringArray.length; count++){
    if (alphabet.includes(stringArray[count])){
      if ((alphabet.indexOf(stringArray[count]) + key ) >= alphabet.length) {
        var remainder = (alphabet.indexOf(stringArray[count]) + key ) - alphabet.length ;
        newString.push(alphabet[remainder]);
      } else {
        newString.push(alphabet[alphabet.indexOf(stringArray[count]) + key]);
      } 
    } else {
      newString.push(stringArray[count]);
      count++;
    }
  }

  return newString.join();
};
