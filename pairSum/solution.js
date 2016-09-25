var checkPairSum = function (array, sumInt){
  var found = 0;

  if (array.length < 2) {
    return "no";
  } else {
    return checkArray(array, sumInt);
  }

  function checkArray(array, sumInt) {
    var found = false;
    while (!found){
      for (var firstElement=0; firstElement < array.length; firstElement++){
        for (var secondElement=1; secondElement < array.length; secondElement++){
          if (array[firstElement] + array[secondElement] == sumInt){
            found = true; 
          }
        }
      }
      break;
    }

    if (found === false) {
      return "no";
    } else {
      return "yes";
    }
  }
};

