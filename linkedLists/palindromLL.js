//input: linkedList
//output: boolean


function checkPalindrome(ll){
  if (ll.length <=1) return false;

  var llCopy      = [ll.root];
  var currentNode = ll.root;

  while (currentNode.next !== false){
    llCopy.push(currentNode.next.data);
    currentNode = currentNode.next;
  }

  var llreverse = llCopy.slice('');
  return (llreverse.reverse() === llCopy);
}
