// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript
// TODO.
// initialise the ship map with pairs of (size, amount of ships) values
//
// initialise your map[12][12]:
//   for every place at row and column coordinate of 0 or 11 (the border)
//     mark it as visited
//   for every other place
//      mark it as not visited
//      fill it with either ship or ocean tile from your input
//
// for each row from 1 to 10
//   for each column from 1 to 10
//     if that place has not been visited yet
//       mark that place as visited
//       if that place is a ship tile
//         check the places to the "right" (bigger column numbers)
//           ... and bottom (bigger "row" numbers)
//           until you hit a visited or ocean tile
//         the amount of ship tiles checked (including the first) is current ship's length
//         decrease the amount of ships of that length in the ship map by one
//         mark all ship tiles of the current ship as visited
//         mark all tiles surrounding those ship tiles as visited
//
// if the ship map includes any pairs with non-zero (including negative) amount of ships
//   the map is invalid
// else
//   the map is valid
// --------------------------------------------------
function isValidPlacement(hitPosition) {
    let cornerCheck = false

    for (const position of hitPosition) {
        if (cornerCheck)
            break

        cornerCheck = hitPosition.find(next => {
            return (next.x === position.x + 1 && next.y === position.y - 1) ||
                (next.x === position.x + 1 && next.y === position.y + 1)
        })
    }

    return !cornerCheck
}


// --------------------------------------------------
function validateBattlefield(field) {
    let battleship = []
    const cruisers = []
    const destroyers = []
    const submarines = []
    // ----------------------------------------
    function findShips(hitPositions) {
        if (!hitPositions.length)
            return

        const ship = hitPositions.reduce((shipPositions, current, i) => {
            if (i === 0) {
                shipPositions.push(current)
                return shipPositions
            }
            let last = shipPositions[shipPositions.length - 1]
            if ((current.x === last.x && current.y === last.y + 1) ||
                (current.x === last.x + 1 && current.y === last.y)) {
                shipPositions.push(current)
            }
            return shipPositions
        }, [])

        switch (ship.length) {
            case 2:
                destroyers.push(ship)
                break
            case 3:
                cruisers.push(ship)
                break
            case 4:
                battleship = ship
                break
            default:
                submarines.push(ship[0])
                break
        }

        for (const position of ship)
            hitPositions.splice(hitPositions.indexOf(position), 1)
        findShips(hitPositions)
    }

    // ----------------------------------------
    const hitPosition = field.reduce((hits, row, index) => {
        for (const item of row) {
            const position = {x: index}
            if (item) {
                position.y = index
                hits.push(position)
            }
        }
        return hits
    }, [])

    // ----------------------------------------
    if (!isValidPlacement(hitPosition)) {
        console.log("Position wasn't valid.")
        return false
    }
    if (hitPosition.length !== 20) {
        console.log(`${hitPosition.length} hits..`)
        return false
    }

    // ----------------------------------------
    findShips(hitPosition)
    return (
        cruisers.length === 2 &&
        destroyers.length === 3 &&
        submarines.length === 4 &&
        battleship.length === 4
    )
}


// --------------------------------------------------
console.log(
    validateBattlefield([
        [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ])
)
