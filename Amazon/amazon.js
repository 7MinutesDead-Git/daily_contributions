function swapInPlace(array, indexA, indexB) {

}

function minSwapsRequired(s) {
    s = [...s]
    let endIndex = s.length

    // If the length is odd, then the middle index won't need to change since its the reflection point.
    let middleIndex = endIndex / 2
    // But if the length is even, our mid points will be two numbers that also need to be identical.
    let middleLeft = null
    let middleRight = null

    if (s.length % 2 === 0) {
        middleLeft = (endIndex / 2) - 1
        middleRight = endIndex / 2
    }

    let leftSlice
    // We'll reverse the right side so it's a reflection of left. Then we can compare indices directly.
    let rightSlice

    if (middleLeft) {
        leftSlice = s.slice(0, middleLeft)
        rightSlice = s.slice(middleRight, endIndex).reverse()
    } else {
        leftSlice = s.slice(0, middleIndex)
        rightSlice = s.slice(middleIndex, endIndex).reverse()
    }

    console.log(leftSlice)
    console.log(rightSlice)
}

minSwapsRequired(101000)