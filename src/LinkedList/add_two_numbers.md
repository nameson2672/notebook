# Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number `0` itself.
 
**Example 1:**
```csharp
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```
**Example 2:**
```csharp
Input: l1 = [0], l2 = [0]
Output: [0]
```
**Example 3:**
```csharp
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 ```

**Constraints:**

- The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
- It is guaranteed that the list represents a number that does not have leading zeros.

## SOlution

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
   public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
        var sumList = new ListNode();
        var current = sumList;
        int carry = 0, sum = 0;
        
        while (l1 != null || l2 != null || carry == 1)
        {
            var v1 = l1 == null ? 0 : l1.val;
            var v2 = l2 == null ? 0 : l2.val;
            sum = v1 + v2 + carry;
            carry = sum > 9 ? 1 : 0;
            sum = sum % 10;
            current.next = new ListNode(sum);
            
            current = current.next;
            l1 = l1 == null ? null : l1.next;
            l2 = l2 == null ? null : l2.next;
        }
        
        return sumList.next;
    }
}
```