// https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/javascript

class Sudoku
{
    constructor(board) {
        this.board = board
        this.validSum = 0
        this.buildValidSum()
    }
    // -------------------------
    buildValidSum() {
        // Build the sum based on the size of the sudoku board.
        // We'll use validSum to verify if all numbers are present later by comparing sums.
        for (let i = 1; i <= this.board.length; i++) {
            this.validSum += i
        }
    }
    // Verify all rows.
    rowsAreValid() {
        for (const row of this.board) {
            let sum = 0
            for (const entry of row)
                sum += Number(entry)
            if (sum !== this.validSum)
                return false
        }
        return true
    }
    // Verify all columns.
    columnsAreValid() {
        for (let i = 0; i < this.board.length; i++) {
            let sum = 0
            for (const row of this.board)
                sum += Number(row[i])
            if (sum !== this.validSum)
                return false
        }
        return true
    }
    // Verify all nested blocks in equal chunks.
    blocksAreValid() {
        // Example: a sudoku board length of 9 will have 3 blocks of size 3x3.
        // A sudoku board length of 4 will have 2 blocks of size 2x2.
        // So we can determine the blockSize by grabbing the square root of our board array length.
        const blockSize = Math.sqrt(this.board.length)
        // Moving row and column by block size allows us to iterate in chunks.
        for (let row = 0; row < this.board.length; row += blockSize) {
            for (let column = 0; column < this.board[row].length; column += blockSize) {
                let sum = 0
                // Now we iterate through x and y within the chunk.
                for (let xOffset = 0; xOffset < blockSize; xOffset++)
                    for (let yOffset = 0; yOffset < blockSize; yOffset++)
                        sum += Number(this.board[row + xOffset][column + yOffset])
                if (sum !== this.validSum)
                    return false
            }
        }
        return true
    }
}


function validSolution(board){
    const sudoku = new Sudoku(board)
    return sudoku.rowsAreValid() && sudoku.columnsAreValid() && sudoku.blocksAreValid()
}
