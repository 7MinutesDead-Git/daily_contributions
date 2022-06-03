// https://www.codewars.com/kata/56a1c63f3bc6827e13000006/train/javascript

// A Node class for building a binary tree structure.
// This is necessary to hit an O(log n) search time for building sums.
class BSTNode {
    constructor(value, sum) {
        this.sum = sum
        this.right = null
        this.left = null
        this.dupe = 1
        this.value = value
    }
}

// Solution
function smaller(arr) {
    let root = null
    const result = []

    // Recursive function to build out the binary tree and maintain our sums as we go.
    // TODO: This should to be refactored to take advantage of encapsulation,
    //  ie closure could be used so buildTree() doesn't need so many parameters.
    function buildTree(currentNum, node, result, index, rollingSum) {
        if (!node) {
            node = new BSTNode(currentNum, 0)
            result[index] = rollingSum
        }
        else if (node.value === currentNum) {
            result[index] = rollingSum + node.sum
            node.dupe++
        }
        else if (node.value > currentNum) {
            node.sum++
            node.left = buildTree(currentNum, node.left, result, index, rollingSum)
        }
        else {
            node.right = buildTree(currentNum, node.right, result, index, (rollingSum + node.dupe + node.sum))
        }
        return node
    }

    for (let i = arr.length-1; i >= 0; i--) {
        root = buildTree(arr[i], root, result, i, 0)
    }
    return result
}

const test1 = [5, 4, 7, 9, 2, 4, 4, 5, 6] // [4, 1, 5, 5, 0, 0, 0, 0, 0]
console.log(smaller(test1))