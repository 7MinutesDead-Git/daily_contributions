// https://www.codewars.com/kata/55beec7dd347078289000021/train/javascript
function Node(data) {
    this.data = data;
    this.next = null;
}

function length(head) {
    let result = 0
    let node = head

    while (node !== null) {
        result++
        node = node.next
    }
    return result
}

function count(head, data) {
    let result = 0
    let node = head

    while (node !== null) {
        if (node.data === data)
            result++
        node = node.next
    }
    return result
}