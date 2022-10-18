// Return the first element from the given array that passes the test specified by the provided function.
// arrayFilter(arr, func)

function arrayFilter(arr: any[], func: Function) {
    for (const item of arr) {
        if (func(item))
            return item
    }
    return undefined
}