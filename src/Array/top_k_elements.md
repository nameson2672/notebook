# Top K Elements

Given an integer array `nums` and an integer `k`, return *the* `k` *most frequent elements*. You may return the answer in **any order**.

**Example 1:**

```csharp
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

**Example 2:**

```csharp
Input: nums = [1], k = 1
Output: [1]
```

## Solution:

To solve above problem we add all unique elements to dictionary as key and there occurrence as value. And from dictionary we get the lost of all key and sort them according to their value in decreasing order and return the k elements.

```csharp
public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {

        Dictionary<int, int> mp
            = new Dictionary<int, int>();

        for (int i = 0; i < nums.Length; i++) {    
            if (!mp.ContainsKey(nums[i]))
                mp[nums[i]] = 0;
            mp[nums[i]]++;
        }

        List<int> queue = mp.Keys.ToList();
        queue.Sort(delegate(int y, int x) {
            if (mp[x] == mp[y])
                return x.CompareTo(y);
            else
                return (mp[x]).CompareTo(mp[y]);
        });
        return queue.GetRange(0,k).ToArray(); 
    }
}
```

The Big O of the above solution is O(nLog(n)).
