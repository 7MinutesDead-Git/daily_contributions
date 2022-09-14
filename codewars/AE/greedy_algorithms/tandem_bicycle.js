// https://www.algoexpert.io/questions/tandem-bicycle
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Initially forgot to use a/b for sorting, so nums sorted as strings
    // and messed up some test cases.
    redShirtSpeeds = redShirtSpeeds.sort((a, b) => a - b)
    blueShirtSpeeds = blueShirtSpeeds.sort((a, b) => a - b)

    if (fastest)
        blueShirtSpeeds = blueShirtSpeeds.reverse()

    console.log(redShirtSpeeds)
    console.log(blueShirtSpeeds)

    const result = redShirtSpeeds.reduce((total, speed, i) => {
        total += Math.max(speed, blueShirtSpeeds[i])
        return total
    }, 0);

    console.log(result)
    return result
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;
