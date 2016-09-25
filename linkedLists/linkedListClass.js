var LinkedList = function () {
  this.head = null;
};

LinkedList.prototype.push = function(val){
  var node = {
    value: val,
    next: null
  };

  if(!this.head){
    this.head = node;
  } else {
    current = this.head;
    while (current.next){
      current = current.next;
    }
    current.next = node;
  }
};

LinkedList.prototype.length = function() {
  var size = 0;

  if (!this.head){
    return size;
  } else {
    for (var node = this.head; node.next !== null; node = node.next){
      size++;
    }
    return size+1;
  }
};
