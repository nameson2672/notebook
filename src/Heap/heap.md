# Heap
Heap is a fundamental data structure used for various purposes such as priority queues, heap sort, and graph algorithms. Here's a short summary based on the provided information:

**Heap data structure:**

A heap is a binary tree, typically implemented as an array, with special properties.
- Two types of heaps: max heaps and min heaps.
- Max heaps: parent nodes have a greater value than their children.
- Min heaps: parent nodes have a smaller value than their children.
- Heaps are nearly complete binary trees, where all levels are filled except possibly the last level, which is filled from left to right.
- Heaps are represented as arrays, with the root at index 1. To find a node's children, multiply the index by 2 for the left child and add 1 for the right child. The parent of a node is obtained by dividing the node's index by 2.
- The height of a heap is logarithmic, denoted as O(log n).