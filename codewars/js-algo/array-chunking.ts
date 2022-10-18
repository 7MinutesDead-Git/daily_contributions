// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5))
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2))


function chunkArray(array: number[], chunkSize: number) {
    const chunks = []
    let currentChunk = []
    let divider = 0

    for (const num of array) {
        divider++
        currentChunk.push(num)

        if (divider === chunkSize) {
            chunks.push(currentChunk)
            currentChunk = []
            divider = 0
        }
    }

    if (currentChunk.length)
        chunks.push(currentChunk)

    return chunks
}