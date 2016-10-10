var oneAway = function(string1, string2){
   if (string1 == string2){
      return true;
   } else if (Math.abs(string1.length - string2.length) > 1 ){
      return false;
   } else {
      return checkStrings();
   }

   function checkStrings(){
      var word1 = string1.toLowerCase().split('');
      var word2 = string2.toLowerCase().split('');
      var index1 = 0;
      var index2 = 0;
      var oneOff = 0;

      for(var count = 1; count < word1.length || count < word2.length; count++){
         if (word1[index1] == word2[index2]) {
             index1++;
             index2++;
         } else if((word1[index1] != word2[index2]) && (word1.length > word2.length)){
             index1++;
             oneOff++; 
         } else if((word1[index1] != word2[index2]) && (word1.length < word2.length)){
             index2++;
             oneOff++;
         } else {
             index1++;
             index2++;
             oneOff++;
         } 
      }
      
      if (oneOff > 1) {
          return false;
      } else {
           return true;
      }     
   }
};
