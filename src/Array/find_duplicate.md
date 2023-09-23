# Find the Duplicate Number

Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

There is only one repeated number in `nums`, return this repeated number.

You must solve the problem without modifying the array `nums` and uses only constant extra space.

**Example 1:**

```csharp
Input: nums = [1,3,4,2,2]
Output: 2
```
**Example 2:**

```csharp
Input: nums = [3,1,3,4,2]
Output: 3
 ```

 ## Solution 

 This problem can be solved using hash set and buy sorting.
 The best solution is obtained by using [Floyd’s Cycle Finding Algorithm](./../LinkedList/linked_list_cycle_ii.md) using array index and as a pointer to value.

 ```csharp
public class Solution {
    public int FindDuplicate(int[] nums) {
        int slow = 0;
        int fast = 0;

        while(true)
        {
            slow = nums[slow];
            fast = nums[nums[fast]];
            if(slow == fast)
                break;
        }
        int slow2 = 0;
        while(true)
        {
            slow = nums[slow];
            slow2= nums[slow2];
            if(slow == slow2)
                return slow;
        }
    }
}
 ```

 This solution is O(n) time complexity and O(1) space complexity. 