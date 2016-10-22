function anagram(str1, str2){
  if(str1.length != str2.length) {return false}
  
  var arr1 = str1.split('').sort();
  var arr2 = str2.split('').sort();
  
  (arr1.join('') === arr2.join('')) ? console.log(true) : console.log(false);
}
