# Binary Tree Level Order Traversal
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

**Example 1:**
![](https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg)

```csharp
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
```
**Example 2:**
```csharp
Input: root = [1]
Output: [[1]]
```
**Example 3:**

```csharp
Input: root = []
Output: []
```

**Constraints:**

- The number of nodes in the tree is in the range [0, 2000].
- -1000 <= Node.val <= 1000

## Solution:
```csharp
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {  
    public IList<IList<int>> LevelOrder(TreeNode root) {
        var result = new List<IList<int>>();
        if(root == null) return result;
        
        var q = new Queue<TreeNode>();
        q.Enqueue(root);
        
        while(true) {
            var curLevelCount = q.Count;
            if(curLevelCount == 0) break;
            var curNodes = new List<int>();
            while(curLevelCount > 0) {
                var cur = q.Dequeue();
                curNodes.Add(cur.val);
                
                if(cur.left != null) 
                    q.Enqueue(cur.left);
                
                if(cur.right != null) 
                    q.Enqueue(cur.right);
                curLevelCount--;
            }
            result.Add(curNodes);
        }
        
        return result;
    }
}
```