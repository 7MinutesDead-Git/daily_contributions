// https://eloquentjavascript.net/04_data.html#i_8ZspxiCEC/


// -------------------------------------------------------------
// The sum of a range.
// https://eloquentjavascript.net/04_data.html#i_8ZspxiCEC/
function range(start, end, step = 1) {
    const result = []
    while (start <= end) {
        result.push(start)
        start += step
    }
    return result
}

function sum(array) {
    return array.reduce((total, num) => total + num)
}

const testArray = range(0, 100, 5)
console.log(testArray)
console.log(sum(testArray))


// -------------------------------------------------------------
// Reversing an array.
// https://eloquentjavascript.net/04_data.html#i_6xTmjj4Rf5
function reverseArray(array) {
    const result = []
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i])
    }
    return result
}
console.log(reverseArray([1, 2, 3, 4, 5]))

function reverseInPlace(array) {
    const midpoint = array.length / 2
    let start = 0
    let end = array.length - 1

    while (start <= midpoint) {
        [array[start], array[end]] = [array[end], array[start]]
        start++
        end--
    }
}

const reverseMe = [1, 2, 3, 4, 5, 6]
reverseInPlace(reverseMe)
console.log(reverseMe)


// -------------------------------------------------------------
// https://eloquentjavascript.net/04_data.html#i_nSTX34CM1M
// A List.
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function arrayToList(array){
    let node = new ListNode()
    // Building it backwards is simpler than building it forwards.
    // I think to build it forwards I would need a recursive approach.
    for (let i = array.length - 1; i > 0; i--) {
        node.value = array[i]
        node = new ListNode(array[i-1], node)
    }
    return node
}

function listToArray(node) {
    const result = []
    while (node.next !== null) {
        result.push(node.value)
        node = node.next
    }
    result.push(node.value)
    return result
}

function isArrayValid(arrayOne, arrayTwo) {
    for (let i = 0; i < numArray.length; i++)
        if (arrayOne[i] !== arrayTwo[i])
            return false
    return true
}

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const linkedList = arrayToList(numArray)
const backToArray = listToArray(linkedList)
console.log(isArrayValid(numArray, backToArray))


// -------------------------------------------------------------
// https://eloquentjavascript.net/04_data.html#i_IJBU+aXOIC

// Unpack objects into [key, value] pairs.
function unpackObject(object, runningArray=[]) {
    for (const property in object) {
        if (typeof object[property] === 'object')
            return unpackObject(object[property], runningArray)
        else
            runningArray.push([property, object[property]])
    }
    return runningArray
}

// Deep comparison of two objects with further nested objects.
// Returns true if all key/value pairs are present.
function deeplyEquivalent(itemOne, itemTwo) {
    // Unpack objects into [key, value] pairs.
    const queueOne = unpackObject(itemOne)
    const queueTwo = unpackObject(itemTwo)

    if (queueOne.length !== queueTwo.length)
        return false

    // Don't sort until after checking length first, to save some computational time.
    queueOne.sort()
    queueTwo.sort()

    for (let i = 0; i < queueOne.length; i++) {
        if (queueOne[i][0] !== queueTwo[i][0] || queueOne[i][1] !== queueTwo[i][1])
            return false
    }
    return true
}

const testObjBase = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
}
const testObjMatch = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
}
const testObjDifferent = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 5
    }
}
const testObjUnordered = {
    a: 1,
    e: 4,
    c: {
        d: 3,
        b: 2
    }
}
const testObjectLonger = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4,
        f: 1
    }
}
console.log(deeplyEquivalent(testObjBase, testObjMatch))
console.log(deeplyEquivalent(testObjBase, testObjDifferent))
console.log(deeplyEquivalent(testObjBase, testObjUnordered))
console.log(deeplyEquivalent(testObjBase, testObjectLonger))