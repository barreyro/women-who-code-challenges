var sortArrays = function (array1, array2) {
  var sortedInteger = [];
  var count1 = 0;
  var count2 = 0;
  
  if(count1 == array1.length  &&  count2 == array2.length){
    if (array1[count1] < array2[count2] ) {
      sortedInteger.push(array1[count1]);
      sortedInteger.push(array2[count2]);
    } else { 
      sortedInteger.push(array2[count2]);
      sortedInteger.push(array1[count1]);
    }
  }

  while(count1 < array1.length || count2 < array2.length) {
    if (array1[count1] < array2[count2]){
      sortedInteger.push(array1[count1]);
      count1++;
    } else if (array2[count2] < array1[count1] ){
      sortedInteger.push(array2[count2]);
      count2++;
    } else if (array2[count2] === array1[count1]) {
      sortedInteger.push(array2[count2]);
      count2++;
    }  else if (array2[count2] == array2max && array1[count1] != array1max){
      sortedInteger.push(array1[count1]);
      count1++;
    }  else {
      count2++;
    }
  }
};
