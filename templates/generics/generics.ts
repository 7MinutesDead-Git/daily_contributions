// Returns a memoized version of the passed function.
// The memoized function will return the cached result when called with the same arguments.
// The cache is stored in the closure of the returned function.
function memoizeFunction(fn: Function): Function {
    const cache = {}

    return <T>(arg: T): T => {
        const key = JSON.stringify(arg)
        if (cache[key]) {
            console.log("returning cached value")
            return cache[key]
        }
        console.log("returning new value")
        cache[key] = fn(arg)
        return cache[key]
    }
}

// Get prefilled array that takes in length and fills that array with a value of any type.
function getPrefilledArray<T>(length: number, value: T): T[] {
    return Array(length).fill(value)
}