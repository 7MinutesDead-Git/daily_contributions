// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = (n: number): number => {
    return n * 10
};

// Tast 4: make your memo function generic, so that it accepts the times10 function as a
// callback rather than defining the n * 10 logic inside.
// Keep the cache in the memoize function scope.
const memoize = (fn: Function): Function => {
    const cache = {}

    return (arg: number): number => {
        if (cache[arg]) {
            console.log("returning cached value")
            return cache[arg]
        }
        console.log("returning new value")
        cache[arg] = fn(arg)
        return cache[arg]
    }
}

const memoizedTimes10 = memoize(times10)
console.log(memoizedTimes10(9))
console.log(memoizedTimes10(9))
console.log(memoizedTimes10(9))
console.log(memoizedTimes10(8))
console.log(memoizedTimes10(8))