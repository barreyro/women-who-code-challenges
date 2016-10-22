function Solution(){
  this.removeDuplicates=function(head){
    var dupArr = [];
    var currentNode = head;
  
    dupArr.push(currentNode.data);
  
    while(currentNode.next !== null) {
      var index = dupArr.length - 1;
      if (dupArr[index] != currentNode.data) {
        dupArr.push(currentNode.data);
        currentNode = currentNode.next;
      } else {
        currentNode = currentNode.next;
      }
    }
  
    if (currentNode.data != dupArr[(dupArr.length -1)]){
        dupArr.push(currentNode.data);
    }
    console.log(dupArr.join(" "));
  
  };
}
