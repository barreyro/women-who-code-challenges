var convertNum = function (int) {
  const onesLib= ['zero', 'one', 'two', 'three', 'four', 
          'five', 'six', 'seven', 'eight', 'nine',
          'ten', 'eleven', 'twelve', 'thirteen',
          'fourteen', 'fifteen', 'sixteen', 'seventeen',
          'eighteen', 'nineteen'];

  const tensLib = {
      '2': 'twenty', 
      '3': 'thirty',
      '4': 'forty', 
      '5': 'fifty',
      '6': 'sixty', 
      '7': 'seventy', 
      '8': 'eighty', 
      '9': 'ninety'
  };

  const intArray = int.toString().split('');  

  if (int < 20) {
    return onesLib[int];
  } else if (intArray.length == 3){
    return 'one hundred';
  } else if (int < 20){
    return onesLib[int];
  } else if (intArray[1] == "0"){
    return tensLib[intArray.pop()];
  } else{
    return (tensLib[intArray[0]]+ onesLib[intArray[1]]);
  }
};
