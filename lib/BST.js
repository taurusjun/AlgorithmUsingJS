//exports.BST = BST;
var BST = function () {
    this.root=new Node(null,null,null);
    this.add = add;
    this.inOrder=inOrder;
}

var Node = function (left,right,data) {
    this.left = left;
    this.right = right;
    this.data = data;
}

function inOrder(root) {
    if(root!=null && root.data!=null){
        inOrder(root.left);
        console.log(root.data);
        inOrder(root.right);
    }
}

function add(newData) {
    var newNode = new Node(null,null,newData);
    addHelper.call(this,this.root, newNode);
}

function addHelper(root, newNode) {
    if(root.data === null){
        root.data = newNode.data;
        return;
    }else {
        var newRoot=null;
        if(newNode.data > root.data){
            if(root.right===null){
                root.right = newNode;
                return;
            }else{
                newRoot = root.right;
            }
        }else{
            if(root.left===null){
                root.left = newNode;
                return;
            }else{
                newRoot = root.left;
            }
            newRoot = root.left;
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

bst.inOrder(bst.root)