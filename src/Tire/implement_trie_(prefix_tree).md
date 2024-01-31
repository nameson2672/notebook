# Implement Trie (Prefix Tree)
A trie (pronounced as "try") or **prefix tree** is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

- `Trie()` Initializes the trie object.
- `void insert(String word)` Inserts the string word into the trie.
- `boolean search(String word)` Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
- `boolean startsWith(String prefix)` Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 

**Example 1:**

```csharp
Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
```
 

**Constraints:**

- 1 <= word.length, prefix.length <= 2000
- word and prefix consist only of lowercase English letters.
- At most 3 * 104 calls in total will be made to insert, search, and startsWith.

## Solution: 
```csharp
public class TrieNode {
    public TrieNode(){
        children = new Dictionary<char, TrieNode>();
    }
    public Dictionary<char, TrieNode> children {get; set;}
    public bool isWord {get; set;}
}
public class Trie {
    private TrieNode root;
    public Trie() {
        root = new TrieNode();
    }
    
    public void Insert(string word) {
        var cur = root;
        foreach(var c in word){
            if(!cur.children.ContainsKey(c)){
                cur.children[c] = new TrieNode();
            }
            cur = cur.children[c];        
        }
        cur.isWord = true;
    }
    
    public bool Search(string word) {
        var cur = root;
        foreach(var c in word){
            if(!cur.children.ContainsKey(c)){
                return false;
            }
            cur = cur.children[c];
        }
        return cur != null && cur.isWord;
    }
    
    public bool StartsWith(string prefix) {
        var cur = root;
        foreach(var c in prefix){
            if(!cur.children.ContainsKey(c)){
                return false;
            }
            cur = cur.children[c];
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.Insert(word);
 * bool param_2 = obj.Search(word);
 * bool param_3 = obj.StartsWith(prefix);
 */

```