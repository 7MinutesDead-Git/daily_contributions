// https://www.codewars.com/kata/5765870e190b1472ec0022a2/train/javascript
// Still unsolved.

function mazeStringToArray(maze) {
    const mazeArray = []
    let row = []
    for (const block of maze) {
        if (block === '\n') {
            mazeArray.push(row)
            row = []
        }
        else
            row.push(block)
    }
    // Be sure to push the final row since this row won't end with a new line.
    mazeArray.push(row)
    return mazeArray
}

function mazeCrawler(maze, y = 0, x = 0, exploreQueue = []) {
    console.table(maze)
    if (maze[y][x] === '.') {
        // Mark visited locations so we don't back-track.
        maze[y][x] = '▄'
        // [y] row can be undefined, so we need to catch it before we try to access [x] index of undefined array.
        let up = maze[y-1] ? maze[y-1][x] : undefined
        let right = maze[y][x+1]
        let down = maze[y+1] ? maze[y+1][x] : undefined
        let left = maze[y][x-1]

        // This is how we hit the bottom right corner and successfully escape the maze.
        if (right === undefined && down === undefined) {
            console.log('--------- Found Exit! -----------')
            console.table(maze)
            console.log('/////////////////////////////////')
            return true
        }

        // if (down === '.' && right === '.')
        //     branchHead = [y, x]

        // Prefer to move down first, then right, as that is the direction of the exit.
        if (down === '.')
            exploreQueue.push([y+1, x])
        if (right === '.')
            exploreQueue.push([y, x+1])
        // Potential to backtrack.
        if (up === '.')
            exploreQueue.push([y-1, x])
        if (left === '.')
            exploreQueue.push([y, x-1])

        if (exploreQueue.length > 0) {
            const next = exploreQueue.pop()
            return mazeCrawler(maze, next[0], next[1], exploreQueue)
        }
    }
    console.log('--------- Failed! -----------')
    console.table(maze)
    return false
}

function pathFinder(maze) {
    const mazeArray = mazeStringToArray(maze)
    return mazeCrawler(mazeArray)
}

const testMazeOpenBottom =
`.W.
.W.
...`

const testMazeClosedBottom =
`.W.
.W.
W..`

const testMazeBigOpenField =
`......
......
......
......
......
......`

const testMazeTheWayIsShut =
`......
......
......
......
.....W
....W.`

const testMazeMess =
`.......
W...W.W
...WW..
W.W....
.WW.W..
...W...
W.W.W..`

// Unable to solve for this one.
const testMazeMessTwo =
`..WW......
W..W.W...W
..W......W
W....W....
...W...W..
.......W..
.W.W.W....
.WW..WW..W
.WW..W.W.W
.W..WW....`

tests = [testMazeOpenBottom, testMazeClosedBottom, testMazeBigOpenField, testMazeTheWayIsShut, testMazeMess, testMazeMessTwo]
// for (const test of tests)
//     pathFinder(test)

pathFinder(testMazeMessTwo)