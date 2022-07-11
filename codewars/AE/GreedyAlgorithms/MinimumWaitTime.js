// https://www.algoexpert.io/questions/minimum-waiting-time
function minimumWaitingTime(queries) {
    console.log(queries)
    // [1, 5, 2, etc]
    // Can be executed in any order.
    // wait 1 second then execute next query.
    // wait 5 seconds then execute NEXT query in array, etc.
    // So executing third will take 6 seconds, then pause another 2.

    // [1, 2, 2, 3, 6] => 0 + 1 + 3 + 5 + 8
    // [3, 2, 1, 2, 6] => 0 + 3 + 5 + 6 + 8
    queries.sort((a, b) => a - b)

    let totalWaitTime = 0
    let lastNum = 0

    for (const num of queries) {
        totalWaitTime += lastNum
        lastNum += num
    }
    return totalWaitTime
}