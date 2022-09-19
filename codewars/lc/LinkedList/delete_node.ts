// Challenge-provided Node:
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// Just gotta edit out the current node by re-assigning it to the next value, and the next.next node.
// Then it's like the target node never existed.
// In other words, you are copying the *next* Node to the current node,
// then skipping over the now-unnecessary duplicate next node.
function deleteNode(root: ListNode | null): void {
    root.val = root.next.val
    root.next = root.next.next
}