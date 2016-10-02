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
