
//input sorted array, two empty arrays
//output sorted array
function moveTower(sortedArr, arr2, arr3){
  var t1 = sortedArr;
  var t2 = arr2; // []
  var t3 = arr3; // []

  if (t1.length === 1){
    var value = t1.pop();
    t3.push(value);
    return [t1, t2, t3];
  } else if (t1.length === 0){
    return "No disks detected"; 
  } else if (t1.length == 2){
    var firstDisk = t1.pop();
    t2.push(firstDisk);
    var secondDisk = t1.pop();
    t3.push(secondDisk);
    t3.unshift(t2);
  }

  function moveDisk(t1, t2, t3){
    if (t3.length === sortedArr.length){
      return( t1, t2, t3);
    } else if ((t1.length !== 0) && (t2.length !== 0)){ 
      var disk1 = t1.shift();
      t3.push(disk1);
      var desk2 = t1.shift();
      return t1, t2, t3;
    }
  };

}
