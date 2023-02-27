// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


// In this implementation we'll optimize for space over time.
// Meaning, we'll iterate the O(1.5n), but required space is O(1) for tracking the current node and the length.
function middleNode(head: ListNode | null): ListNode | null {
    let length = 0
    let node: ListNode = head

    // We first traverse the list to find the overall length (and really, a LinkedList data structure would
    // be more helpful if it internally kept track of its own length).
    while (node.next) {
        length++
        node = node.next
    }

    // If there are two middle nodes (length is even), then returning the second middle node is
    // just returning the next highest integer (ceiling).
    let midway = Math.ceil(length / 2)

    // Finally we'll move up the list until we reach our desired mid-way point and grab that node.
    node = head
    while (midway) {
        node = node.next
        midway--
    }

    return node
}


// Now let's try optimizing for speed over space. This will require O(n) space and O(n) time.
function middleNodeFaster(head: ListNode | null): ListNode | null {
    // In this variant, we'll keep track of all nodes in a map.
    const nodes = new Map()
    nodes.set(0, head)
    let length = 0
    let node: ListNode = head

    while (node.next) {
        length++
        node = node.next
        nodes.set(length, node)
    }

    // If there are two middle nodes (length is even), then returning the second middle node is
    // just returning the next highest integer (ceiling).
    let midway = Math.ceil(length / 2)

    // Finally we'll return the node saved at our middle index.
    return nodes.get(midway)
}


// And this is the best of both worlds.
function middleNodeTwoPointer(head: ListNode | null): ListNode | null {
    // In this variant, we'll use two pointers, one moving at twice the speed of the other.
    // When the faster pointer reaches the end, the slower pointer will be at the middle.
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}
