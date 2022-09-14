// https://www.algoexpert.io/questions/tandem-bicycle
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Initially forgot to use a/b for sorting, so nums sorted as strings
    // and messed up some test cases.
    redShirtSpeeds = redShirtSpeeds.sort((a, b) => a - b)

    // Reverse our sort if we're looking for the fastest, so we always
    // start by pairing our largest with our smallest.
    blueShirtSpeeds = fastest ?
        blueShirtSpeeds.sort((a, b) => b - a) :
        blueShirtSpeeds.sort((a, b) => a - b)

    return redShirtSpeeds.reduce((total, speed, i) => {
        total += Math.max(speed, blueShirtSpeeds[i])
        return total
    }, 0);
}