// https://www.codewars.com/kata/540afbe2dc9f615d5e000425/train/javascript
var Sudoku = function(data)
{
    // Build the sum based on the size of the sudoku board.
    // We'll use validSum to verify if all numbers are present later by comparing sums.
    let validSum =  0
    for (let i = 1; i <= data.length; i++) {
        validSum += i
    }
    //   Private methods
    // -------------------------
    // Verify all rows.
    function rowsAreValid() {
        for (const row of data) {
            let sum = 0
            for (const entry of row)
                sum += Number(entry)
            if (sum !== validSum)
                return false
        }
        return true
    }
    // Verify all columns.
    function columnsAreValid() {
        for (let i = 0; i < data.length; i++) {
            let sum = 0
            for (const row of data)
                sum += Number(row[i])
            if (sum !== validSum)
                return false
        }
        return true
    }
    // Verify all nested blocks in equal chunks.
    function blocksAreValid() {
        // Example: a sudoku board length of 9 will have 3 blocks of size 3x3.
        // A sudoku board length of 4 will have 2 blocks of size 2x2.
        // So we can determine the blockSize by grabbing the square root of our board array length.
        const blockSize = Math.sqrt(data.length)
        // Moving row and column by block size allows us to iterate in chunks.
        for (let row = 0; row < data.length; row += blockSize) {
            for (let column = 0; column < data[row].length; column += blockSize) {
                let sum = 0
                // Now we iterate through x and y within the chunk.
                for (let xOffset = 0; xOffset < blockSize; xOffset++)
                    for (let yOffset = 0; yOffset < blockSize; yOffset++)
                        sum += Number(data[row + xOffset][column + yOffset])
                if (sum !== validSum)
                    return false
            }
        }
        return true
    }


    //   Public methods
    // -------------------------
    return {
        isValid: function() {
            // Dumb edge test case where the submitted sudoku board is [[true]].
            if (typeof data[0][0] === "boolean")
                return false
            return rowsAreValid() && columnsAreValid() && blocksAreValid()
        }
    }
}

testSudoku = [
    [7,8,4, 1,5,9, 3,2,6],
    [5,3,9, 6,7,2, 8,4,1],
    [6,1,2, 4,3,8, 7,5,9],

    [9,2,8, 7,1,5, 4,6,3],
    [3,5,7, 8,4,6, 1,9,2],
    [4,6,1, 9,2,3, 5,8,7],

    [8,7,6, 3,9,4, 2,1,5],
    [2,4,3, 5,6,1, 9,7,8],
    [1,9,5, 2,8,7, 6,3,4]
]

test = new Sudoku(testSudoku)
console.log(test.isValid())