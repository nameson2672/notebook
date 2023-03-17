# Longest Consecutive Sequence

Given an unsorted array of integers `nums`, return *the length of the longest consecutive elements sequence.*

You must write an algorithm that runs in `O(n)` time.

**Example 1:**

```
Input:nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is `[1, 2, 3, 4]`. Therefore its length is 4.
```

## Solution

Using following steps we can solve the problem: 

1. Create an empty hash.
2. Insert all array elements to hash.
3. Do following for every element arr[i]
4. Check if this element is the starting point of a subsequence. To check this, simply look for arr[i] - 1 in the hash, if not found, then this is the first element a subsequence.
5. If this element is the first element, then count the number of elements in the consecutive starting with this element. Iterate from arr[i] + 1 till the last element that can be found.
6. If the count is more than the previous longest subsequence found, then update this.

```csharp
public class Solution {
    public int LongestConsecutive(int[] nums) {
        if (nums.Length < 2) return nums.Length;
        
        var set = new HashSet<int>(nums);
        var longest = 0;
        foreach (var n in set)
        {
            if (!set.Contains(n-1))
            {
                var length = 0;
                while (set.Contains(n+length))
                {
                    length++;
                    longest = Math.Max(longest, length);
                }
            }
        }
        
        return longest;
    }
}
```


