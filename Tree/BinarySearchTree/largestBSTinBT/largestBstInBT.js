class NodeValue {
    constructor(min, max, maxSize, isBST) {
        this.min = min;
        this.max = max;
        this.maxSize = maxSize;
        this.isBST = isBST;
    }
}
class Solution {
    largestBst(root) {
        function helper(node) {
            if (!node) return new NodeValue(Infinity, -Infinity, 0, true) // empty subtree

            let left = helper(node.left);
            let right = helper(node.right);


            // if current sub Tree is bst
            if (left.isBST && right.isBST && left.max < node.key && right.min > node.key) {
                return new NodeValue(
                    Math.min(left.min, node.key),
                    Math.max(right.max, node.key),
                    left.maxSize + right.maxSize + 1,
                    true
                );
            }
            // if current subtree is not bst
            return new NodeValue(-Infinity, Infinity, Math.max(left.maxSize, right.maxSize), false)

        }
        return helper(root).maxSize;
        // code here

    }
}


// Largest BST in a Binary Tree (GFG) — Short Notes
// Approach (Postorder DFS)

// Idea: Process the tree from bottom to top. Every subtree returns information that its parent needs.

// Each recursive call returns:

// 1. isBST   -> Is the current subtree a BST?
// 2. min     -> Minimum value in the subtree.
// 3. max     -> Maximum value in the subtree.
// 4. maxSize -> Size of the largest BST in the subtree.
// Base Case

// For a null node:

// isBST = true
// min = +∞
// max = -∞
// maxSize = 0

// This makes an empty subtree a valid BST.

// Current Node

// Get information from left and right:

// left = helper(node.left)
// right = helper(node.right)

// Check if the current subtree is a BST:

// left.isBST &&
// right.isBST &&
// left.max < node.data &&
// node.data < right.min

// If true:

// isBST = true
// maxSize = left.maxSize + right.maxSize + 1
// min = min(left.min, node.data)
// max = max(right.max, node.data)

// Else:

// isBST = false
// maxSize = max(left.maxSize, right.maxSize)
// Why Postorder?

// Because a parent can decide whether it is a BST only after knowing information about both its left and right subtrees.

// Left
//  ↓
// Right
//  ↓
// Root
// Time Complexity
// O(n)
// Every node is visited exactly once.
// Space Complexity
// O(h)
// h = height of the tree (recursion stack).
// Balanced tree: O(log n)
// Skewed tree: O(n)
// Memory Trick

// Every subtree returns:

// (isBST, min, max, size)

// A subtree is a BST if:

// left.max < root < right.min

// If BST:

// size = left.size + right.size + 1

// Else:

// size = max(left.size, right.size)

// This is the key idea to remember for interviews.