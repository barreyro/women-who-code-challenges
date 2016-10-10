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

BST.prototype.addNode = function (value, parentNode, leftChild, rightChild){
  var newNode = new Node(value, parentNode, leftChild, rightChild);

  if (!this.root){ 
    this.root = newNode;
    return;
  } 

  var parent  = this.root;
  var found   = false;

  while (found === false){
    if (newNode.value < parent.value){
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
