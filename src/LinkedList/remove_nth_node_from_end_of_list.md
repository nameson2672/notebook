# Remove Nth Node From End of List
Given the head of a linked list, remove the nth node from the end of the list and return its head.
**Example 1:**
```csharp
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```
**Example 2:**
```csharp
Input: head = [1], n = 1
Output: []
```
**Example 3:**
```csharp
Input: head = [1,2], n = 1
Output: [1]
```
## Solution:

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
    public ListNode RemoveNthFromEnd(ListNode head, int n) {
        var dummy = new ListNode(0, head);
        var left = dummy;
        var right = head;
        
        while(n > 0) {
            right = right.next;
            n--;
        }
        
        while(right != null) {
            left = left.next;
            right = right.next;
        }
        
        // delete
        left.next = left.next.next;
        return dummy.next;
    }
}
```
This solution is of time complexity `O(n)`.