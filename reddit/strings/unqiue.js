function uniqueString(str){
  var str = str.split('');
  str.sort();
  
  for(var i = 0; i < str.length ; i++){
    if(str[i] == str[i+1]) return false;
  }
  return true;
}
