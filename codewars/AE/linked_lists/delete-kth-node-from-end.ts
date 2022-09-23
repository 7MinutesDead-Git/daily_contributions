// This is an input class. Do not edit.
export class LinkedList {
    value: number;
    next: LinkedList | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

// Time = O(N)
// Space = O(1)
export function removeKthNodeFromEnd(head: LinkedList, k: number) {
    let tailPointer: LinkedList | null = head
    let target: LinkedList | null = head

    // If k is 1, we're trying to delete the very last node.
    // That means we'll need an extra space between our pointers to correctly remove the
    // end node, so distance will start at 0. Otherwise we can start distance at 1.
    let distance = k === 1 ? 0 : 1

    // Traverse the tail pointer first until we've moved it k nodes forward,
    // then start traversing both of them at the same time.
    // Once the lead tailPointer is null, then the target pointer will be at the node we need to delete.
    while (tailPointer.next !== null) {
        if (distance >= k) {
            target = target.next!
        }
        tailPointer = tailPointer.next
        distance++
    }

    // Once we've escaped the above while loop (we found the end), it's time to delete the node!
    if (k === 1) {
        // When k is 1, meaning deleting the very last node,
        // then we delete it by removing any reference to it.
        target.next = null
    }
    else {
        // Otherwise we delete the current node by overwriting it with the next node.
        target.value = target.next!.value!
        target.next = target.next!.next
    }
}

