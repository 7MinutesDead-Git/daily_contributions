// https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript
// Check out:
//  - Cartesian product

// ------------------------------------------------
function getPINs(observed) {
    const neighbors = getNeighbors(observed)
    return combinations(neighbors)
}
// ------------------------------------------------
function getNeighbors(observed) {
    const neighbors = {
        "0": ["0", "8"],
        "1": ["1", "2", "4"],
        "2": ["2", "1", "3", "5"],
        "3": ["3", "2", "6"],
        "4": ["4", "1", "5", "7"],
        "5": ["5", "4", "2", "6", "8"],
        "6": ["6", "5", "3", "9"],
        "7": ["7", "4", "8"],
        "8": ["8", "7", "5", "9", "0"],
        "9": ["9", "8", "6"],
    }
    const result = []
    for (const key of [...observed]) {
        result.push(neighbors[key])
    }
    return result
}
// ------------------------------------------------
// Some helpful discussion and approaches from here: https://stackoverflow.com/a/57015870/13627106
// Setting the parameters up this way allows us to toss in any number of arrays.
// Very useful when we need to check arrays of neighbors for potential PIN presses, since we may not know how large the initial PIN input is.
// firstKeyNeighbors: first key's neighbor array.
// secondKeyNeighbors: If present, second key's neighbor array.
// allOtherKeyNeighbors: If present, additional key's neighbor arrays.
function combinations([firstKeyNeighbors, ...[secondKeyNeighbors, ...allOtherKeyNeighbors]]) {
    if (!secondKeyNeighbors)
        return firstKeyNeighbors

    const combined = secondKeyNeighbors.reduce((accumulator, secondKeyNeighbor) => {
        return accumulator.concat(firstKeyNeighbors.map(firstKeyNeighbor => `${firstKeyNeighbor}${secondKeyNeighbor}`))
    }, [])

    return combinations([combined, ...allOtherKeyNeighbors])
}


// ------------------------
function runTests() {
    const expectations = {
        "8": ["5", "7", "8", "9", "0"],
        "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
        "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]
    };

    for (const pin in expectations) {
        console.log(`Getting pins for: ${pin}.`)
        console.log(`Expecting ${expectations[pin]}`)
        console.log(getPINs(pin))
    }
}

// ------------------------
runTests()