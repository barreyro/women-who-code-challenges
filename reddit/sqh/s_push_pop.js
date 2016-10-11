//Implement a stack with push a pop functions

var Stack = function () {
  this.stack = [];
};

Stack.prototype.addThis = function (value){
  this.stack.push(value);
};

Stack.prototype.popThis = function (value) {
  this.stack.pop(value);  
};
