# Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return `true` if it is a palindrome, or `false` otherwise.

**Example 1:**

```csharp
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

## Solution 1:
This solution is using two pointer in which after replacing all non alphanumeric character we test whether first character and last character match or not and increase first by one and decrease last by one if any non matching value found we return false otherwise true.
```csharp
using System.Text.RegularExpressions;
public class Solution {
    public bool IsPalindrome(string s) {
        string pattern = "[^a-zA-Z0-9]";
        s = Regex.Replace(s, pattern, "");
        s = s.ToLower();
        var postfix = s.Length-1;
        for(var i =0; i< s.Length; i++)
            {
                if(s[i] != s[postfix])
                return false;
                postfix--;
            }
        return true;
    }
}
```

This solution is O(n) time and space complexity.