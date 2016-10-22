function Solution() {
  this.removeDuplicates = function(head){
    var currentNode = head; 
    var outputArr = [];

    while(currentNode.data){
      if (currentNode.next === null){
        var lastItem = outputArr[outputArr.length -1];
        if (currentNode.data == lastItem){
          currentNode = null;
        } else {
          outputArr.push(currentNode.data);
        }
      } else if (currentNode.data !== currentNode.next.data){
        outputArr.push(currentNode.data);
        currentNode = currentNode.next;
      } else{
        currentNode = currentNode.next;
      }
    }
  
    console.log( outputArr.join(" ") );
  };
}
