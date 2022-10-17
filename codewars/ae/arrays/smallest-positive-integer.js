function solution(array) {
    array.sort((a, b) => a - b)
    // Since we only care about positive numbers, the smallest "missing" could never
    // be lower than 1.
    let smallest = 1

    for (const num of array) {
        // Since we only care about positive numbers:
        if (num > 0) {
            if (smallest < num)
                return smallest
            else
                smallest = num + 1
        }
    }
    return smallest
}