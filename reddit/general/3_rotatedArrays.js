function rotatedArrays(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  if (arr1[0] != arr2[0]) {
    var startIndex = arr2.indexOf(arr1[0]);
    var leftOverValues = arr2.splice(0, startIndex);
    var rotatedArr2 = arr2.concat(leftOverValues);
    ( arr1.join('') == rotatedArr2.join('') ) ? console.log(true) : console.log(false);
  } else {
    ( arr1.join('') == arr2.join('') ) ? console.log(true) : console.log(false);
  } 
}
