// -------------------------------------------------------------------------------------
// The initially tempting but convoluted approach that doesn't work
interface VisitedNodes {
    [nodeIndex: string]: boolean
}
export function maybeHasSingleCycle(array: number[]) {
    let index: number = 0
    const visited: VisitedNodes = {}

    while (!visited[index]) {
        const stepValue = array[index]
        visited[index] = true
        index += stepValue % array.length
    }
    // Still doesn't really work like this.
    return array.length === Object.keys(visited).length
}

// -------------------------------------------------------------------------------------
// The best way
export function hasSingleCycle(array: number[]) {
    let index: number = 0
    let visited: number = 0
    const length: number = array.length
    let movedOnFromStart: boolean = false

    while (visited < array.length) {
        // To catch steps that would take us nowhere, e.g. we get stuck not moving.
        if (array[index] === 0) {
            return false
        }
        // To catch cases like [1, -1, 1, -1]
        // movedOnFromStart boolean is required for this particular approach since the very first
        // iteration will always mean index === 0.
        if (index === 0 && movedOnFromStart) {
            return false
        }
        // Wrap back around with modulo
        const stepIndex = (index + array[index]) % length
        // This makes it possible to wrap back around backwards as well as forwards,
        // e.g. allowing us to modulo with negative numbers.
        // ((this % n) + n) % n;
        index = (stepIndex + length) % length
        visited++
        movedOnFromStart = true
    }
    // So, we've made it back to the starting point, and we've visited everything once.
    return index === 0 && visited === array.length
}