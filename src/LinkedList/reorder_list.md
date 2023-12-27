# Reorder List
You are given the head of a singly linked-list. The list can be represented as:

`L0 → L1 → … → Ln - 1 → Ln`
Reorder the list to be on the following form:

`L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …`
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

**Example 1:**
```csharp
Input: head = [1,2,3,4]
Output: [1,4,2,3]
```
**Example 2:**
```csharp
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
```
## Solution
TO solve this problem we first find middle of the list and we reverse second half and join one first and one second continuing so weill get us linked list in reorder form.
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
    private ListNode revList(ListNode head) {
        ListNode prev = null;
        
        var cur = head;
        
        while(cur != null) {
            var temp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = temp;
        }
        return prev;
        
    }
    public void ReorderList(ListNode head) {
        if(head == null || head.next == null) return;
        
        // find middle
        var slow = head;
        var fast = head.next;
        var nodeCount = 1;
        while(true) {
            if(fast == null || fast.next == null) break;
            slow = slow.next;
            nodeCount++;
            fast = fast.next.next; 
        }
        
        var middle = slow.next;
        slow.next = null;
        
        
        var secondHead = revList(middle);
        
        // merge two lists
        var first = head;
        var second = secondHead;
        while(second != null) {
            var temp1 = first.next;
            var temp2 = second.next;
            first.next = second;
            second.next = temp1;
            first = temp1;
            second = temp2;
            
        }
        
        return;
    }
}
```
The time complexity of this solution is `O(n)`.