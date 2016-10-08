function checkSequence(n,a,t){
    var length = n;
    var array = a;
    var sum = t;
    var result = "FALSE";

    for(var index=0; index<length; index++){
       if (array[index] == sum){
          result = "TRUE";
          break;
       } else {
          var currentSum = array[index];
          for(var nextIndex=1; nextIndex<length; nextIndex++){
              if(currentSum + array[nextIndex] > sum){
                nextIndex = length;
              } else if (currentSum + array[nextIndex] < sum){
                 currentSum += array[nextIndex];
              } else if(currentSum + array[nextIndex] == sum){
                result = "TRUE";
                break;
              }
          }   
      }
   }
   return result;
}

