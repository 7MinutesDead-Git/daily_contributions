// Implements a circular array as a queue, with constant time enqueue and dequeue.
// Increasing the size of the queue is done by doubling the size of the array, and will run in O(n) time.
// This is a more practical approach than linked lists due to how memory works.
class Queue<T> {
    private queue: T[]
    private first: number
    private last: number
    private MAX_SIZE: number

    constructor() {
        this.queue = []
        this.first = 0
        this.last = 0
        this.MAX_SIZE = 10
    }

    // Adds an item to the queue, placed at the end. If the queue is full, the queue size is doubled.
    // The last pointer is moved to the next item in the queue that was just enqueued.
    enqueue(item: T) {
        if ((this.last + 1) % this.MAX_SIZE === this.first) {
            this.increaseQueueSize()
        }
        this.queue[this.last] = item
        this.last = (this.last + 1) % this.MAX_SIZE
    }

    // Pops off the first item in the queue and returns it.
    // The first pointer is moved to the next item in the queue.
    dequeue(): T | undefined {
        if (this.first === this.last) {
            return undefined
        }
        let item = this.queue[this.first]
        this.queue[this.first] = undefined
        this.first = (this.first + 1) % this.MAX_SIZE
        return item
    }

    // Returns the number of items in the queue.
    size(): number {
        return (this.last + this.MAX_SIZE - this.first) % this.MAX_SIZE
    }

    // Returns the current maximum size of the queue.
    // Adding more items to the queue that exceed MAX_SIZE will cause the queue to double in size.
    maxSize(): number {
        return this.MAX_SIZE
    }

    // Returns a copy of the items in the queue as an array.
    items(): T[] {
        return this.buildQueueCopy()
    }

    // Doubles the size limit of the queue, and copies the items from the old queue to a new queue.
    // The items are copied over so that empty dequeued slots are removed from the new queue.
    // The first and last pointers are reset to the beginning and end of the new queue.
    // This is an O(n) operation.
    increaseQueueSize() {
        this.queue = this.buildQueueCopy()
        this.first = 0
        this.last = this.queue.length
        this.MAX_SIZE *= 2
    }

    // Returns a copy of the items in the queue as an array.
    private buildQueueCopy(): T[] {
        const newArray = []
        for (let i = this.first; i !== this.last; i = (i + 1) % this.MAX_SIZE) {
            newArray.push(this.queue[i])
        }
        return newArray
    }

    // Returns a status object detailing the current state of the queue.
    status() {
        return {
            firstIndex: this.first,
            lastIndex: this.last,
            size: this.size(),
            maxSize: this.maxSize(),
            activeQueue: this.items(),
            fullQueue: this.queue
        }
    }

    // Makes the Queue class iterable, e.g. for (let item of queue) { ... }
    [Symbol.iterator]() {
        let current = this.first
        const end = this.last
        return { next: () => {
                if (current === end) {
                    return { done: true, value: undefined}
                }
                else {
                    const value = this.queue[current]
                    current = (current + 1) % this.MAX_SIZE
                    return { done: false, value }
                }
            }}
    }
}

const queue = new Queue()
console.log(queue.status())
for (let i = 0; i < 50; i++) {
    queue.enqueue(i)
}
for (let i = 0; i < 25; i++) {
    queue.dequeue()
    queue.enqueue("test")
}
console.log(queue.status())