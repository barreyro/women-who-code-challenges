function sortCars(arr){
   var length = arr.length;
   var openSpotIndex;
   var unsortedCar;
   if (!length || length == 1) return arr;

   var carIndex = 0;
   while (carIndex < length) {
     var carNum = arr[carIndex];
     if (carNum == 'X' && carIndex === 0) {
       carIndex++;
     } else if (carNum == carIndex && arr[0] == 'X') {
       carIndex++;
     } else if (car[0] !== 'X')  {
       for (var count = 1; count < length; count++){
         if (arr[count] === 'X') {
           arr[count] = arr[0];
           arr[0] = 'X'; 
           count = 0;
         }
       } 
     } else if(car[carIndex] != carIndex) {
       var found = false;
       for (var index = 1; found === false ; index++){
         if (car[index] == carIndex) {
           car[0] = carIndex;
           found = true;
         }
       }
     } else{
       console.log('poopie');
     }
   }
}
