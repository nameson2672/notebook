# 3Sum

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0.`

Notice that the solution set must not contain duplicate triplets.

 
**Example 1:**

```csharp
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
```

**Example 2:**
```csharp
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
```

**Example 3:**
```csharp
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
```

## Solution

The solution is obtained by using two pointer approach. First we need to sort array and for each element wen try to find two other element such that sum equal to zero.

```csharp
public class Solution {
    public IList<IList<int>> ThreeSum(int[] nums) {
        List<IList<int>> res = new List<IList<int>>();
        int left, right;
        Array.Sort(nums);
        
        for(int i = 0; i < nums.Length; i++){
            if(i > 0 && nums[i] == nums[i-1]){
                continue;
            }
            
            left = i+1;
            right = nums.Length-1;
            
            while(left < right){
                if(nums[i] + nums[left] + nums[right] > 0){
                    right--;                    
                }else if(nums[i] + nums[left] + nums[right] < 0){
                    left++;
                }else {
                    res.Add(new List<int> {nums[i], nums[left], nums[right]});
                    left++;
                    while(nums[left] == nums[left-1] && left < right){
                        left++;
                    }
                }
            }
        }
        return res;
    }
}
```

The time complexity of the above code is `O(n2).`