# Majority Element

Given an array `nums` of size `n`, return *the majority element*.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

**Example 1:**

```csharp
Input: nums = [3,2,3]
Output: 3
```

**Example 2:**

```csharp
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

## Solution 1:

First solution is using the simple sorting method. From question we know that there is always a majority element so when we sort the majority element is always present at the n\2 index in the array.

This solution is O(nlogn) time complexity.

## Solution  2:

This solution is obtained using HashMap data structure. In this method we add element to the has map and if the element already in hash map we increase that element frequency and at last we return a element having highest frequency.

This solution has O(n) time as well as space complexity.

## Solution 3:

This is the solution the algorithm Boyer-Moore Voting Algorithm. In this approach we use two pointer one to track current element and other to track count. This problem is valid as there is always a majority element.

```csharp
public class Solution {
    public int MajorityElement(int[] nums) {
        int count = 0;
        int currEle = 0;
        for(int i=0; i<nums.Length; i++){
            if(count == 0)
                currEle = nums[i];
            if(currEle == nums[i])
                count++;
            else
                count--;
        }
        return currEle;
    }
}
```

   This solution has O(n) time and O(1) space complexity.
