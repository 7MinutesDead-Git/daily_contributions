// This is an input class. Do not edit.
export class LinkedList {
    value: number;
    next: LinkedList | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export function removeKthNodeFromEnd(head: LinkedList, k: number) {
    let tailPointer: LinkedList | null = head
    let length = 0
    let targetPointer: LinkedList | null = head
    let tailFound = false

    while (!tailFound) {
        if (tailPointer.next) {
            tailPointer = tailPointer.next
        }
        else {
            tailFound = true
        }
        length++
    }

    const targetSteps = length -  k
    while (length !== targetSteps) {
        targetPointer = targetPointer.next
        length--
    }

    if (targetPointer.next) {
        targetPointer.value = targetPointer.next.value
        targetPointer.next = targetPointer.next.next
    }
}

