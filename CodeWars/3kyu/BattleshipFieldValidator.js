// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript
// TODO.
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
