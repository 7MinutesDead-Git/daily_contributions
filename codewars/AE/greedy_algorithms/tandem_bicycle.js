// https://www.algoexpert.io/questions/tandem-bicycle
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Easy to forget: Initially I forgot to use a/b for sorting, so nums sorted as strings
    // by default and messed up some test cases. Beware!
    redShirtSpeeds = redShirtSpeeds.sort((a, b) => a - b)

    // Reverse our sort if we're looking for the fastest, so we always
    // start by pairing our largest with our smallest.
    // (note the swapping of a and b)
    blueShirtSpeeds = fastest ?
        blueShirtSpeeds.sort((a, b) => b - a) :
        blueShirtSpeeds.sort((a, b) => a - b)

    return redShirtSpeeds.reduce((total, redSpeed, i) => {
        // Since our arrays are always the same length and
        // since we can access the index (i) within reduce,
        // we can iterate through blueShirtSpeeds too!
        total += Math.max(redSpeed, blueShirtSpeeds[i])
        return total
    }, 0);
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;
