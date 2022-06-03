// Get the middle peak index between the two edges of the moutain.
function getPeakIndex(arr, start, end) {
    const mountain = arr.slice(start, end)
    const peakValue = Math.max(...mountain)
    const innerIndex = mountain.indexOf(peakValue)
    // If we add this inner slice's index to the start index of the original array, we get the peak index.
    return start + innerIndex
}

function pickPeaks(arr){
    const pos = []
    const peaks = []

    let startMountain = 0
    let endMountain = 0
    let mountainAtStart = false

    for (let i = 0; i < arr.length; i++) {
        const inclining = arr[i] < arr[i + 1]
        const declining = arr[i] > arr[i + 1]

        // Determine if the very start of the array is the start of a mountain.
        if (inclining && i === 0)
            mountainAtStart = true

        // Ensure we don't move the start of a mountain, if that start is at the very beginning of the array.
        // This ensures multiple mountains can be found.
        if (inclining && startMountain === 0 && !mountainAtStart)
            startMountain = i

        // Once we start declining from the peak, we can begin to look for the end of the mountain.
        if ((declining && startMountain > 0) || declining && mountainAtStart)
            endMountain = i

        // If we're tracking the end of a mountain, once we find another incline (or the end of the array),
        // we know we have finished our slice and can begin determining the peak and peak index.
        if (inclining && endMountain > 0 || i === arr.length - 1 && endMountain > 0) {
            endMountain = i
            let peakIndex = getPeakIndex(arr, startMountain, endMountain + 1)
            let peak = arr[peakIndex]
            pos.push(peakIndex)
            peaks.push(peak)
            // Reset the mountain start and end.
            startMountain = i
            endMountain = 0
            mountainAtStart = false
        }
    }
    return {pos, peaks}
}

// {positions: [3, 7], peaks: [6, 3]}
console.log(pickPeaks([1,2,3,6,4,1,2,3,2,1]))