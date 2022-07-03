# Two Sum Problem From LeetCode

## Explain:

Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.

You may assume that each input would have ***exactly* one solution**, and you may not use the *same* element twice.

You can return the answer in any order.

**Example 1:**

```csharp
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

## Solution Idea:

Solved using <mark>Hash Map</mark>

Create a empty Hash Map and iterate through array and calculate if the difference between target and current element is in Map if it is in Map get its index and return the current index of iteration and Map index. And if the difference is not in Map add element to Map with Key as its element value and value as element index. After iteration complete return null.

   

```csharp
 public int[] TwoSum(int[] nums, int target) {
       Hashtable numsHash = new Hashtable();
        for(int i=0; i<nums.Length; i++){
            int compliment = target-nums[i];
            if(numsHash.ContainsKey(compliment)){
                int otherIndex =(int) numsHash[compliment];
                return new int[]{i, otherIndex};
            }
            if(!numsHash.ContainsKey(nums[i])){
                numsHash.Add(nums[i],i);
            }
            
        }
        return null;
        
        }
}
```




