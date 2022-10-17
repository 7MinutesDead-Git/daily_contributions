// Incorrect but saving for reference.
function setZeroes(matrix) {
    const groundZeroes = []

    // Recursive crawling attempt fails as it comes across newly edited 0s.
    function horizontalSpread(pos) {
        const left = matrix[pos.y] ? matrix[pos.y][pos.x-1] : undefined
        const right = matrix[pos.y] ? matrix[pos.y][pos.x+1] : undefined

        if (left) {
            matrix[pos.y][pos.x-1] = 0
            horizontalSpread({...pos, "x": pos.x - 1})
        }
        if (right) {
            matrix[pos.y][pos.x+1] = 0
            horizontalSpread({...pos, "x": pos.x + 1})
        }
    }

    function verticalSpread(pos) {
        const up = matrix[pos.y-1] ? matrix[pos.y-1][pos.x] : undefined
        const down = matrix[pos.y+1] ? matrix[pos.y+1][pos.x] : undefined

        if (up) {
            matrix[pos.y-1][pos.x] = 0
            verticalSpread({...pos, "y": pos.y - 1})
        }
        if (down) {
            matrix[pos.y+1][pos.x] = 0
            verticalSpread({...pos, "y": pos.y + 1})
        }
    }


    for (const [y, row] of matrix.entries()) {
        for (const [x, num] of row.entries()) {
            if (num === 0)
                groundZeroes.push({"x": x, "y": y})
        }
    }

    for (const groundZero of groundZeroes) {
        horizontalSpread(groundZero)
        verticalSpread(groundZero)
    }
    return matrix
}

const testInput = [[1,2,3],[4,0,6],[7,8,9]]
console.log(setZeroes(testInput))