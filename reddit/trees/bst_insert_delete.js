//implement BST with insert and delete functions

function BST(root) {
  this.root = root || '';
}

function Node(value, parentNode, leftChild, rightChild){
  this.value      =  value;
  this.parentNode =  parentNode || '';
  this.leftChild  =  leftChild || '';
  this.rightChild =  rightChild || '';
}

BST.prototype.addNode = function (value) {
  var newNode = new Node(value);

  if (!this.root) { 
    this.root = newNode;
    return;
  } 

  var parent  = this.root;
  var found   = false;

  while (found === false) {
    if (newNode.value < parent.value) {
      if (!parent.leftChild) {
        parent.leftChild = newNode;
        found = true;
      } else if (parent.leftChild && (newNode.value < parent.leftChild.value)) {
        parent = parent.leftChild;
      }
    } else if (newNode.value > parent.value) {
      if (!parent.rightChild) {
        parent.rightChild = newNode;
        found = true;
      } else if (parent.rightChild && (newNode.value > parent.leftChild.value)) {
        parent = parent.leftChild;
      }
    }
  }
};

BST.prototype.deleteNode = function (value) {
  var rootNode = this.root || '';
  var currentNode = this.root || '';
  var loop = true;
  while (loop === true) {
    if (!currentNode){
      return "node not found";
    } else if (currentNode.value < value){
      currentNode = currentNode.rightChild;
    } else if (currentNode.value > value) {
      currentNode = currentNode.leftChild;
    } else if (currentNode.value == value) {
      var rootBool = (rootNode == currentNode);
      if (currentNode.leftChild) {
        recursiveFxn(currentNode, rootBool, left);
      } else if (!currentNode.leftChild && currentNode.rightChild){
        recursiveFxn(currentNode, rootBool, right);
      } else {
        rootNode.value == value;
      }
      var newNode = recursiveFxn(currentNode, rootBool);
      this.root = newNode;
      loop = false;
    }
  }

  function recursiveFxn(currentNode, rootBool){
    var ogRightChildNode = currentNode.rightChild;

    if (rootBool === true){
      var newRightChildNode = currentNode.leftChild.rightChild;

      currentNode = currentNode.leftChild;
      currentNode.rightChild == rightChildNode;

      recusiveFxn(currentNode, false);
    } else if(currentNod
  };

};











