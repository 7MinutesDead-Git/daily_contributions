
// https://www.algoexpert.io/questions/spiral-traverse
// Initial "no peeking" solution:
function spiralTraverse(matrix) {
    const fullLength = matrix.length * matrix[0].length
    const result = []

    // These four variables represent the bounds of the first rectangle perimeter
    // in the spiral that we have to traverse.
    // Traverse that perimeter using these bounds, and then move the bounds inwards.
    // What's nice about this approach is you only need to keep track of these four
    // pointers, and you have this info right away just from the dimensions of the matrix.
    let rowStart = 0
    let columnStart = 0
    let rowEnd = matrix.length - 1
    let columnEnd = matrix[0].length - 1

    // Our primary traversal loop.
    while (result.length < fullLength) {
        // --------------------------------------------
        // Slicing out the values from the rows we need is simple specifically for rows,
        // since we can grab each row directly with rowStart / rowEnd then slice it.
        const topRow = matrix[rowStart].slice(columnStart, columnEnd)
        const bottomRow = matrix[rowEnd].slice(columnStart, columnEnd).reverse()


        // --------------------------------------------
        // Slicing columns is a little more involved with a for loop.
        // This will slice out only the rows we need,
        // since each iteration moves the bounds inward.
        // This one is for going down the right side.
        const rightColumn = []
        // The last item in the bottom row is already grabbed by bottomRow,
        // so skip it by ending our slice at rowEnd + 1.
        for (const row of matrix.slice(rowStart, rowEnd + 1)) {
            rightColumn.push(row[columnEnd])
        }

        // Now we come back up the left side.
        const leftColumn = []
        for (const row of matrix.slice(rowStart + 1, rowEnd).reverse()) {
            leftColumn.push(row[columnStart])
        }

        // --------------------------------------------
        // Now add our freshly sliced columns and rows to the running results.
        // Note that spiral order matters here.
        result.push(...topRow, ...rightColumn, ...bottomRow, ...leftColumn)

        // --------------------------------------------
        // Finally, move the bounds inward.
        rowStart++
        columnStart++
        rowEnd--
        columnEnd--
    }

    // For edge cases where we re-add any extra on final iterations (ie re-adding values at the end).
    // This can occur when the matrix isn't a square, say when the final iteration is one flat row.
    // Hey, it works lol.
    return result.slice(0, fullLength)
}
