var caesarCipher = function(string, key){
  var newString   = []; 
  var regex       = /[A-Za-z]/;
  var stringArray = string.split('');

  function getKeyCode(key) {
    if ( key < 27 ){
      return key;
    } else {
      return (key % 26);
    }
  }

  for (var count = 0; count < stringArray.length; count++) {
    if ( stringArray[count].match(regex) ) {
      var newChar = getCodedChar((stringArray[count]), key);
      newString.push(newChar);
    } else {
      newString.push(stringArray[count]);
    }
  }

  function getCodedChar(string, key){
    var charCode = string.charCodeAt(0);
    var keyCode = getKeyCode(key);
    var newCode = charCode + keyCode;

    if ( (charCode < 91) && ( newCode > 90 ) ) {
      return String.fromCharCode(newCode - 26);
    } else if ( charCode < 91 ) {
      return String.fromCharCode(newCode);
    } else if ( (charCode < 123) && ( newCode > 122 )) {
      return String.fromCharCode(newCode - 26);
    } else {
      return String.fromCharCode(newCode);
    }
  }

  return newString.join('');
};
