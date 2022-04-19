function dirReduc(arr) {
    const values = {
        "NORTH": 1,
        "SOUTH": 1,
        "EAST": 2,
        "WEST": 2
    }

    for (let i = 0; i < arr.length; i++) {
        const firstDirection = arr[i]
        const secondDirection = arr[i + 1]
        const identical = (firstDirection === secondDirection)
        const pointless = (values[firstDirection] - values[secondDirection] === 0)

        if (pointless && !identical) {
            arr.splice(i, 2)
            i -= 2
        }
    }
    return arr
}

test = ["EAST","EAST","WEST","NORTH","WEST","EAST","EAST","SOUTH","NORTH","WEST"]

console.log(dirReduc(test)) // [ 'EAST', 'NORTH' ]