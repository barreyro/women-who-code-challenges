function Node(value){
  this.data = value;
  this.previous = null;
  this.next = null;
}

function LinkedList() {
  this._length = 0;
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.add = function(value) {
  if(this._length) {
    this.tail.next = node;
    this.previous = this.tail;
    this.tail = node;
  } else {
    this.head = node;
    this.tail = node;
  }

  this._length++;

  return node;
};

LinkedList.prototype.searchNodeAt = function(position){
  var currentNode = this.head,
    length = this._length,
    count = 1,
    message = {failure: 'non-existent node'};
  
  if (length === 0 || position < 1 || position > length){
    throw new Error(message.failure);
  }

  while (count < position){
    currentNode = currentNode.next;
    count++;
  }
  return currentNode;
};







