// https://www.codewars.com/kata/52a89c2ea8ddc5547a000863/train/javascript

// Easy solution with arrays (but you have to scan the whole array every iteration).
function loop_size(node) {
    const visited = []

    while (visited.indexOf(node) === -1) {
        visited.push(node)
        node = node.next
    }
    return visited.length - visited.indexOf(node)
}

// Faster solution with mapping nodes as keys, and the current node traversal length as values.
function loop_size(node) {
    const lengthsOfTails = new Map()

    while (!lengthsOfTails.has(node)) {
        lengthsOfTails.set(node, lengthsOfTails.size)
        node = node.next
    }
    return lengthsOfTails.size - lengthsOfTails.get(node)
}