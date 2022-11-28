// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
//
// For example:
//
// dup(["abracadabra","allottee","assessee"]) => ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) => ["keles","kenes"].
// Strings will be lowercase only, no spaces
//
// dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]) => ['codewars','picaniny','hubububo'])
// dup(["abracadabra","allottee","assessee"]) => ['abracadabra','alote','asese'])
// dup(["kelless","keenness"]) => ['keles','kenes'])

function removeDuplicates(words: string[]): string[] {
    const results = []
    for (const word of words) {
        let noDupes = ""

        for (const [i, char] of word.split("").entries()) {
            if (char === word[i+1])
                continue
            noDupes += char
        }
        results.push(noDupes)
    }
    return results
}

console.log(removeDuplicates(["abracadabra","allottee","assessee"]))
console.log(removeDuplicates(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]))
console.log(removeDuplicates(["kelless","keenness"]))