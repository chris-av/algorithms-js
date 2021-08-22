# Algorithms

This is my personal repo for writing down common algorithms or other common structures. Note that not all of the code in here may be mine, may come from some tutorials that I have watched over the years. This is especially true for some of the harder algorithms. Therefore, anyone can feel free to look over these, suggest improvements for optimization or download the repo. 

Here are some of my favorite resources for studying algorithms: 

* Academind
* [This](https://github.com/trekhleb/javascript-algorithms) repo by trekleb is so much more comprehensive. Highly recommend you look at this repo instead of this one.

You can run tests by doing the following:

```sh
npm install     # install jest
npm run test    # run the tests
```


## Data Structures
Data structures are abstractions or concepts for storing data. 

### Hash Table
A Hash Table is a data structure that contains key value pairs. Conceptually, this is one of the more efficient means of storing data because retrieving a data point is as simple as calling the key. 

### Node
A node is a data structure that contains a data point and points to other nodes. 

### (Binary) Tree
A binary tree is a collection of nodes. Typically there is a root node that begins the tree. This root node then points to other nodes that also that points to other nodes.

## Sorting Algorithms
Here I describe some of the common sorting algorithms.

### Bubble Sort
Sort a given array in pairs. Make two counters, i, j. For every ith term, compare it to the jth term and switch accordingly. When both i and j reach the end of the array you know you will have sorted the entire array.

### Merge Sort
recursively break apart the array in half until the stack has an array of just one item. Then, rebuild the array by first sorting the items.

### Quick Sort



