function checkPalindrome(str) {
  var str = str.split(''); 
  var rightIndex = str.length - 1;
  var leftIndex = 0;

  if (str.length % 2 === 0 ) {
    while (leftIndex < rightIndex){
      if (str[rightIndex] == str[leftIndex]) {
        rightIndex--;
        leftIndex++;
      } else {
        return false;
      }
    }
    return true;
  } else {
    while(leftIndex != Math.round(str.length /2)){
      if (str[rightIndex] == str[leftIndex]) {
        rightIndex--;
        leftIndex++;
      } else {
        return false;
      }
    }
    return true;
  }
}
