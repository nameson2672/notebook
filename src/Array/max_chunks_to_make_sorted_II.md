# Max Chunks To Make Sorted II

You are given an integer array arr.

We split arr into some number of chunks (i.e., partitions), and individually sort each chunk. After concatenating them, the result should equal the sorted array.

Return the largest number of chunks we can make to sort the array.

 

**Example 1:**
```csharp
Input: arr = [5,4,3,2,1]
Output: 1
Explanation:
Splitting into two or more chunks will not return the required result.
For example, splitting into [5, 4], [3, 2, 1] will result in [4, 5, 1, 2, 3], which isn't sorted.
```
**Example 2:**
```csharp
Input: arr = [2,1,3,4,4]
Output: 4
Explanation:
We can split into two chunks, such as [2, 1], [3, 4, 4].
However, splitting into [2, 1], [3], [4], [4] is the highest number of chunks possible.
```

**Constraints:**

- `1 <= arr.length <= 2000`
- `0 <= arr[i] <= 108`

## Solution 
```csharp
public class Solution {
public int MaxChunksToSorted(int[] arr)
{
	int n = arr.Length;
	int[] lMax = new int[arr.Length];
	int [] rMin = new int[arr.Length]; 
        lMax[0] = arr[0];
        for(int i =1; i< n; i++){
            lMax[i] = Math.Max(lMax[i-1], arr[i]);
        }

        rMin[n - 1] = arr[n-1];
        for(int i = n-2; i>=0; i--){
            rMin[i] = Math.Min(rMin[i+1], arr[i]);
        }
        var ans = 0;
	for (int i = 0; i < n-1; i++)
	{
		if (lMax[i] <= rMin[i + 1]) ans++;

	}

	return ans + 1;
}

}
```