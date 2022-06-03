function permuteMe(string) {
    const array = Array.from(string)
    const length = array.length
    const seen = Array(length)
    const variation = Array(length)

    // Generator function for yielding each permutation as requested.
    // I don't really think I need to use a generator but I wanted to practice anyway.
    return function* backtracking(position) {
        if (position === length)
            yield variation.slice().join('')
        else
            for (let i = 0; i < length; ++i)
                if (!seen[i]) {
                    seen[i] = true
                    variation[position] = array[i]
                    yield* backtracking(position + 1)
                    seen[i] = false
                }
    }(0);
}

// To be honest I'm not sure if the problem is calling for permutations or combinations,
// since some test cases are resolved by removing duplicates, but I can't say for sure if I'm
// accidentally generating excess duplicates because I'm really stumbling my way through this problem.
// Either way, using a set rather than an array works to remove duplicates!
function unpackPermutations(generator, result = new Set()) {
    let item = generator.next()

    if (item['done'] === false) {
        result.add(item['value'])
        unpackPermutations(generator, result)
    }
    return result
}

function permutations(string) {
    const generator = permuteMe(string)
    return [...unpackPermutations(generator)]
}

console.log(permutations('aabb'))