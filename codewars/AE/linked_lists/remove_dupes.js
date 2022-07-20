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

    // While next node exists:
    while (scout) {
        // If these values match:
        if (current.value === scout.value) {
            // Remove scouted node by pointing current node to next-next node,
            // essentially skipping over the scouted node.
            current.next = scout.next
            // And move scout pointer up too.
            scout = scout.next
        }
        else {
            // Otherwise, move current pointer up.
            current = current.next
            scout = current.next
        }
    }
    return linkedList
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
