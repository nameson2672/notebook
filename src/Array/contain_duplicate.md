# Contains Duplicate

Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

**Example 1:**

```csharp
Input: nums = [1,2,3,1]
Output: true
```

**Example 2:**

```csharp
Input: nums = [1,2,3,4]
Output: false
```

## Solution 1:

The simple solution is by using sorting algorithm. First we sort the array so all same elements will be adducent to each other so we check if i-1 and i th element in array are same by looping through array. And return true if find otherwise false.

## Solution 2:

The solution 2 is by using a Hash map. Loop through array and if element is not present in map add it to map if it is already there we thus find the duplicate element so return true. If array is traversed fully we return false as there is no duplicate element.

```csharp
public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        Hashtable  numsHash = new Hashtable();
        for(int i=0; i < nums.Length; i++){
            if(!numsHash.ContainsKey(nums[i])){
                numsHash.Add(nums[i],i);
            }else {
                return true;
            }            
        }
        return false;
    }
}
```

This solution is O(n) time and space complexity.
