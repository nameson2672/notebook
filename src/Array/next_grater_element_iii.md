# Next Greater Element III

Given a positive integer `n`, find *the smallest integer which has exactly the same digits existing in the integer* `n` *and is greater in value than* `n`. If no such positive integer exists, return `-1`.

**Note** that the returned integer should fit in **32-bit integer**, if there is a valid answer but it does not fit in **32-bit integer**, return `-1`.

**Example 1:**

```shell
Input: n = 12
Output: 21
```

## Solution

If the number sorted decreasingly we return -1 as no grater number is present if sorted increasingly we interchange last two element and we are done.

To solve other number we go through flowing:

- We traverse through array formed from given integer from right to left.

- We search the index at where the num[i]>num[i-1].

- We interchange the indexed number-1 element with the grater element present in the array from element index to length of an array.

- Then we reverse the number from the searched index to the end of the array. We do this step to find the largest smallest element.
  
  ### The walk though for the number 345629876:
  
  - At first we form char array from the given integer
  
  - We search from that number where num[i]>num[i-1] and we fund the such index to be 5(34562<mark>9</mark>876)
  
  - so we replace i-1 element with the element grater element in the range index from 5 to 8. and the number become 3456<mark>6</mark>987<mark>2</mark>
  
  - Now we reverse the number from searched indexed to the length of an array and go the number to be 345662789 in this way we get the next grater element.
    
    

```csharp
public class Solution {
    public int NextGreaterElement(int n) {
       string number = n.ToString();
        char[] num = number.ToCharArray();
        int len = num.Length;
        int i = len-1;
        while(i>0){
            if(num[i] > num[i-1])
                break;
            i--;
        }
        if(i==0) return -1;
        int j = i-1;
        i = len-1;
        while(i>j){
            if(num[j] < num[i]){
                char temp = num[j];
                num[j] = num[i];
                num[i] = temp;
                break;
            }
            i--;
        }
        StringBuilder ans_str = new StringBuilder();
        for(i=0;i<=j;i++) ans_str.Append(num[i]);
        for(i=len-1;i>j;i--) ans_str.Append(num[i]);
        
        long ans = Int64.Parse(ans_str.ToString());
        if(ans >  Int32.MaxValue) return -1;
        return (int)ans;
    }
}
```




