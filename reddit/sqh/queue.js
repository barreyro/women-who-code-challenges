function Queue() {
  this.arr = [];
}

Queue.prototype.queue = function (char){
  this.arr = this.arr.concat(char);
};

Queue.prototype.dequeue = function() {
  return this.arr.shift();
};
