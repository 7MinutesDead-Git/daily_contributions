// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
snail = function(array) {
    // -------------------
    const result = []
    let x = 0
    let y = 0

    // -------------------
    const crawler = {
        horizontal: 1,
        vertical: 0,
        turns: 0,
        previousPosition: [0, 0],
        visited: [],
        directions: [
            [1, 0],
            [0, -1],
            [-1, 0],
            [0, 1]
        ],
        turn: function() {
            const newDirection = this.directions[this.turns % this.directions.length]
            this.horizontal = newDirection[1]
            this.vertical = newDirection[0]
            this.turns++
            // Whenever we need to turn due to running into a wall, we need to also reset our position.
            x = this.previousPosition[1]
            y = this.previousPosition[0]
        },
        move: function() {
            this.previousPosition = [y, x]
            x += this.horizontal
            y += this.vertical
        },
        previouslyVisited: function(coordinates) {
            if (this.visited) {
                for (const entry of this.visited) {
                    if (entry[0] === coordinates[0] && entry[1] === coordinates[1])
                        return true
                }
            }
            return false
        }
    }
    // -------------------
    function hitWall() {
        try {
            const deadEnd = array[y][x] === undefined
            const alreadyBeenHere = crawler.previouslyVisited([y, x])
            return alreadyBeenHere || deadEnd
        }
        // This would mean y is undefined, as in hitting the upper and lower walls.
        catch (TypeError) {
            return true
        }
    }
    // -------------------
    while (true) {
        if (hitWall()) {
            crawler.turn()
            crawler.move()
            // If we run into a wall immediately after turning, we're at the end.
            if (hitWall())
                break
            else
                continue
        }
        result.push(array[y][x])
        crawler.visited.push([y, x])
        crawler.move()
    }
    return result
}

NineSnail = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(snail(NineSnail))
