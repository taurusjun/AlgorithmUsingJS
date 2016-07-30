exports.BST = BST;
var BST = function () {
    this.root=null;
    this.add = add;
}

var Node = function (left,right,data) {
    this.left = left;
    this.right = right;
    this.data = data;
}

function add(newData) {
    var newNode = new Node(null,null,newData);
    addHelper(this.root, newNode);
}

function addHelper(root, newNode) {
    if(this.root === null){
        this.root = newNode;
        return;
    }else {
        var newRoot=null;
        if(this.newNode.data > this.root.data){
            newRoot = this.root.right;
        }else{
            newRoot = this.root.left;
        }

        addHelper(newRoot, newNode);
    }
}

//-------------------------- Test -----------------------
var bst = new BST();
bst.add(23);
bst.add(45);
bst.add(16);
bst.add(37);
bst.add(3);
bst.add(99);
bst.add(22);
