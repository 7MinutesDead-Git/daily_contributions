// https://www.algoexpert.io/questions/remove-duplicates-from-linked-list
// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeDuplicatesFromLinkedList(linkedList) {
    let current = linkedList
    let scout = linkedList.next

    while (scout) {
        if (current.value === scout.value) {
            current.next = scout.next
            scout = scout.next
        }
        else {
            current = current.next
            scout = current.next
        }
    }
    return linkedList
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
