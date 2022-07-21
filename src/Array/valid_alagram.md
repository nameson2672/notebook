# Valid Anagram

  Given two strings `s` and `t`, return `true` *if* `t` *is an anagram of* `s`*, and* `false` *otherwise*.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

```csharp
Input: s = "anagram", t = "nagaram"
Output:true
```

## Solution 1:

By using sorting algorithm we can get the solution. As both strings have equal length and same letters if they are anagram that means sorted char of string from both string s and t are equal. If they are not equal the strings are not an anagram.

## Solution 2:

This solution is by using Hash Map. We add elements with frequency in a hash map for a string s and after all characters are added we remove those character which are present in t. So of map is empty the strings are anagram otherwise are not an anagram.

```csharp
public class Solution {
    public bool IsAnagram(string s, string t) {
        Hashtable sHash = new Hashtable();
        for(int i=0;i<s.Length;i++){
            if(sHash.ContainsKey(s[i])){
                int feq =(int) sHash[s[i]];
                sHash.Remove(s[i]);
                sHash.Add(s[i],feq+1);
            }else{
                sHash.Add(s[i],1);
            }
             
        }
        for(int j=0; j<t.Length;j++){
            if(!sHash.ContainsKey(t[j]))
                return false;
            if((int)sHash[t[j]] == 1){
                sHash.Remove(t[j]);
            } else{
                int feqOfs =(int) sHash[t[j]];
                sHash.Remove(t[j]);
                sHash.Add(t[j],feqOfs-1);
            }
        }
        if(sHash.Count == 0){
            return true;
        }
        return false;
    }
}
```

 


