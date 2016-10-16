function bubbleSort(arr) {
  var swapped = false;

  while (swapped === false){
    for (var index=0; index < (arr.length -1); index++){
      if (arr[index] > arr[index+1]){
        var temp = arr[index];

        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        swapped = true;
      }
    }
  }
}
