//Write a function that takes a number n and returns an array containing a Fibonacci sequence of length n

function fibSeq(int){
  var fibArr = [];

  for(var count=0; count < int; count++) {
    if (int < 3){
      console.log(fibArr);
      fibArr.push(1);
    } else {
      fibArr.push(fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]);
    }
  }
  return fibArr;
}
