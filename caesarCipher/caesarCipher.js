var caesarCipher = function(string, key){
  var keyCode = retriveCode(key);
  var newString = []; 
  var stringArray = string.split('');

  function retrieveCode(key) {
    if ( key < 27 ) return key;
    return key % 26;
  }

  for (var count = 0; count < stringArray.length; count++) {
    if ( stringArray[count].match([/A-Za-z/]) ) {
      newString.push(getCodedChar(string));
    } else {
      newString.push(stringArray[count]);
    }
  }

  function getCodedChar(string){
    var charCode  = string.charCodeAt(0);

    if ( (charCode < 91) && ( (charCode + keyCode ) > 90 ) ) {
      return String.fromCharCode(charCode + keyCode - 26);
    } else if ( charCode < 91 ) {
      return String.fromCharCode(charCode + keyCode );
    } else if ( (charCode < 123) && ( (charCode + keyCode ) > 122 )) {
      return String.fromCharCode(charCode + keyCode - 26);
    } else {
      return String.fromCharCode(charCode + keyCode );
    }
  }

  return newString;
};
