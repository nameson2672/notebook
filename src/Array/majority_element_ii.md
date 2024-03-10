# Majority Element II

Given an integer array of size n, find all elements that appear more than `⌊ n/3 ⌋` times.

**Example 1:**

```csharp
Input: nums = [3,2,3]
Output: [3]
```

**Example 2:**

```csharp
Input: nums = [1]
Output: [1]
```

**Constraints:**

- 1 <= nums.length <= 5 \* 104
- -109 <= nums[i] <= 109

Follow up: Could you solve the problem in linear time and in `O(1)` space?

## Solution

### Solution using HashMap

```csharp
public class Solution {
    public IList<int> MajorityElement(int[] nums) {
Hashtable numsSet = new Hashtable();

	for (int i = 0; i < nums.Length; i++)
	{
		if (numsSet.ContainsKey(nums[i])){
			int freq = (int)numsSet[nums[i]];
			numsSet.Remove(nums[i]);
			numsSet.Add(nums[i], freq+1);
		} else {
			numsSet.Add(nums[i], 1);
		}
	}
	var n = nums.Length;
	var resList = new List<int>();
	foreach(var key in numsSet.Keys){
		if((int)numsSet[key] > n/3){
			resList.Add((int)key);
		}
	}
	return resList;

    }
    }
```

### Optimal Solution using Boyer-Moore Voting Algorithm

```csharp
public class Solution {
    public IList<int> MajorityElement(int[] nums) {
		var ele1 = Int32.MinValue;
	var ele2 = Int32.MinValue;
	var count1 = 0;
	var count2 = 0;

	for (int i = 0; i < nums.Length; i++)
	{
		if (count1 == 0 && ele2 != nums[i])
		{
			count1 = 1;
			ele1 = nums[i];
		}
		else if (count2 == 0 && ele1 != nums[i])
		{
			count2 = 1;
			ele2 = nums[i];
		}
		else if (ele1 == nums[i]) count1++;
		else if (ele2 == nums[i]) count2++;
		else
		{
			count1--;
			count2--;
		}
	}

	var res = new List<int>();
        count1 = 0;
	count2 = 0;
	for (int i = 0; i < nums.Length; i++)
	{
		if (ele1 == nums[i]) count1++;
		if (ele2 == nums[i]) count2++;
	}

	int min = nums.Length/3 +1;
	if (count1 >= min) res.Add(ele1);
	if(count2 >= min) res.Add(ele2);
	return res;
}
}
```