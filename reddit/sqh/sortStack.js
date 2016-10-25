function sortStack(stack){
  var arr = [];
  
  while(stack.head.next !== null){
    var nextElement = stack.head.next;
    var newElement = stack.head;
    newElement.next = '';
    arr.push(newElement);
    stack.head = nextElement;
  }
  var newStack = {}; 
  arr.sort();
  for (var index = (arr.length-1); index < 0; index--){
    if (index == (arr.length-1)){
      stack.head = arr[index]; 
    } else{
      stack.head = arr[index];
      arr[index].next = arr[index + 1];
    }
  }
  stack = newStack;
  return stack;
}
