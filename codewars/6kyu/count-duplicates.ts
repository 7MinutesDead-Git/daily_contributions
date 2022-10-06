export function duplicateCount(text: string): number {
    const map: Record<string, number> = {}

    const counts = text.split("").reduce((count, char) => {
        char = char.toLowerCase()
        if (count[char])
            count[char]++
        else
            count[char] = 1
        return count
    }, map)

    let result = 0
    for (const character in counts) {
        if (counts[character] > 1)
            result++
    }
    return result
}