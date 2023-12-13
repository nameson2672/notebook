# Permutation in String

Given two strings `s1` and `s2`, return true if `s2` contains a permutation of `s1`, or false otherwise.

In other words, return true if one of `s1`'s permutations is the substring of `s2`.

 

**Example 1:**
```csharp
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
```
**Example 2:**
```csharp
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 ```

Constraints:
1 <= `s1`.length, `s2`.length <= 104
`s1` and `s2` consist of lowercase English letters.

## Solution:

```csharp
public class Solution {
    public bool CheckInclusion(string s1, string s2) {
        if(s1.Length > s2.Length) return false;

        var s1Count = Enumerable.Repeat(0, 26).ToArray();
        var s2Count = Enumerable.Repeat(0, 26).ToArray();

        for(var i = 0; i<s1.Length; i++){
            s1Count[s1[i]-'a']++;
            s2Count[s2[i]-'a']++;
        }

        var matches = 0;
        for(var i=0; i<26; i++){
            if(s1Count[i] == s2Count[i]) matches++;
        }

        var left = 0;
        for(var right = s1.Length; right<s2.Length; right++){
            if(matches == 26) return true;

            var index = s2[right]-'a';
            s2Count[index]++; // increasing window size 
            if(s2Count[index] == s1Count[index]){
                matches++;
            } else if (s1Count[index] + 1== s2Count[index]){  // checking if just added element  made index unequal or increased by 1
                matches--;
            }

            index = s2[left]-'a';
            s2Count[index]--; // decreasing window size
            if(s2Count[index] == s1Count[index]){
                matches++;
            } else if (s1Count[index] - 1== s2Count[index]){ // checking if just removed element made index unequal or decreased by 1
                matches--;
            }
            left++;
        }
        return matches==26;
    }
}
```
This solution is O(n) time complexity.