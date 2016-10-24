function checkInt(str){
  var strVerified = false;
  var arr = str.split('');
  for (var index = 0; index < arr.length; index++){
    var charCode = (arr[index]).charCodeAt();
    if ( ( charCode  > 57) || ( charCode < 48) ){
      strVerified = true;
      break;
    } 
  }
  var response = (strVerified === false) ? parseInt(str) : "Bad String";
  return response;
}
