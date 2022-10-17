// https://www.algoexpert.io/questions/first-duplicate-value
function firstDuplicateValue(array) {
    const seen = {}

    for (const num of array) {
        if (seen[num])
            return num
        else
            seen[num] = true
    }
    return -1
}