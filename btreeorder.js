load("btree.js");
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
print("Inorder traversal: ");
nums.inOrder(nums.root);
print("\nPreorder traversal: ");
nums.preOrder(nums.root);
print("\nPostorder traversal: ");
nums.postOrder(nums.root);
var min = nums.getMin();
print("\nThe minimum value of the BST is: " + min);
var max = nums.getMax();
print("The maximum value of the BST is: " + max);
putstr("Enter a value to search for: ");
var value = parseInt(readline());
var found = nums.find(value);
if(found !== null){
    print("Found " + value + " in the BST.");
}else{
    print(value + " was not found in the BST.");
}
