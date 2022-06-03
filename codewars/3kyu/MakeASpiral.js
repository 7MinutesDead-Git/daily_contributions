// https://www.codewars.com/kata/534e01fbbb17187c7e0000c6/train/javascript
// I forced my flawed implementation to work.
// ---------------------------------------------------
function createMatrix(size) {
    const matrix = []
    for (let i = 0; i < size; i++) {
        const subarray = []
        subarray.length = size
        subarray.fill(0)
        matrix.push(subarray)
    }
    return matrix
}

// ---------------------------------------------------
function spiralize(n) {
    const spiral = createMatrix(n)
    console.log(spiral)

    let rowStart = 0
    let rowEnd = n - 1
    let columnStart = 0
    let columnEnd = n - 1
    const gap = 2
    let lastFill = [0, 0]

    while (rowStart <= rowEnd && columnStart <= rowEnd) {
        // Fill the top row with values.
        // Can do by using row and column indexes.
        // We want to control iteration through columns,
        // since we're moving from left to right.
        // columnStart (i) will be starting point.
        // columnEnd (at index 2) will be end point.
        // Top Row:
        for (let i = columnStart === 0 ? 0 : columnStart-1; i <= columnEnd; i++) {
            spiral[rowStart][i] = 1
            lastFill = [rowStart, i]
        }
        rowStart += gap

        // Then move down right column:
        // (rowStart - 1 means we backfill the gap when turning)
        // (this logic also applies to the other subsequent turns)
        for (let i = rowStart-1; i <= rowEnd; i++) {
            spiral[i][columnEnd] = 1
            lastFill = [i, columnEnd]
        }
        columnEnd -= gap

        // Now move across the bottom row:
        for (let i = columnEnd+1; i >= columnStart; i--) {
            spiral[rowEnd][i] = 1
            lastFill = [rowEnd, i]
        }
        rowEnd -= gap

        // Finally we move up the left column:
        for (let i = rowEnd+1; i >= rowStart; i--) {
            spiral[i][columnStart] = 1
            lastFill = [i, columnStart]
        }
        columnStart += gap
    }
    // We need to ensure that the last fill isn't touching the edge of a nearby fill,
    // other than the direction it came from.
    const neighbors = {
        top: spiral[lastFill[0] - 1][lastFill[1]],
        bottom: spiral[lastFill[0] + 1][lastFill[1]],
        left: spiral[lastFill[0]][lastFill[1] - 1],
        right: spiral[lastFill[0]][lastFill[1] + 1]
    }
    let neighborCount = 0
    for (const key in neighbors) {
        if (neighbors[key] === 1) {
            neighborCount++
        }
    }
    if (neighborCount > 1) {
        spiral[lastFill[0]][lastFill[1]] = 0
    }

    console.log(spiral)
    return spiral
}

spiralize(10)