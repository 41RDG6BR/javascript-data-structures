class AVLTree extends BinarySearchTree {
    constructor (compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }

    getNodeHeight(node) {
        if(node == null) {
            return -1;
        }

        return Math.max(
            this.getNodeHeight(node.left), this.getNodeHeight(node.right)
        ) + 1;
    }
}