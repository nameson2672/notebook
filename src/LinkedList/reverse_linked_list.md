# Reverse a Linked List

Given the `head` of a singly linked list, reverse the list, and return *the reversed list*.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)

```csharp
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

## Solution:

Solved using iteration

The loop run as shown in the following gif: taken from [GeekForGeeks]([Reverse a linked list - GeeksforGeeks](https://www.geeksforgeeks.org/reverse-a-linked-list/))

![l](https://media.geeksforgeeks.org/wp-content/cdn-uploads/RGIF2.gif)

```csharp
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode ReverseList(ListNode head) {
        ListNode prev = null;
        var curr = head;
        while(curr != null){
            var nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }
        return prev;
    }
}
```
