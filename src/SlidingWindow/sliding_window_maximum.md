# Sliding Window Maximum
You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 

**Example 1:**
```csharp
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 ```
**Example 2:**
```csharp
Input: nums = [1], k = 1
Output: [1]
 ```
 ## Solution
 ```csharp
 public class Solution
{
    public int[] MaxSlidingWindow(int[] nums, int k)
    {

        var output = new List<int>();
        LinkedList<int> queue = new();
        int left = 0, right = 0;

        while (right < nums.Length)
        {
            // pop smaller values from queue
            while (queue.Count > 0 && nums[queue.Last.Value] < nums[right])
                queue.RemoveLast();
            queue.AddLast(right);

            // remove left val from the window
            if (left > queue.First.Value)
                queue.RemoveFirst();

            if (right + 1 >= k)
            {
                output.Add(nums[queue.First.Value]);
                left++;
            }

            right++;
        }

        return output.ToArray();
    }
}
 ```