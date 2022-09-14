// https://www.algoexpert.io/questions/tandem-bicycle
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Initially forgot to use a/b for sorting, so nums sorted as strings
    // and messed up some test cases.
    redShirtSpeeds = redShirtSpeeds.sort((a, b) => a - b)
    blueShirtSpeeds = blueShirtSpeeds.sort((a, b) => a - b)

    if (fastest)
        blueShirtSpeeds = blueShirtSpeeds.reverse()

    const result = redShirtSpeeds.reduce((total, redSpeed, i) => {
        // For each speed pair, we must always choose the fastest.
        total += Math.max(redSpeed, blueShirtSpeeds[i])
        return total
    }, 0);

    return result
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;