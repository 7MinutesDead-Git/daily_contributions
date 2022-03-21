// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript
function solution(list){
    let result = ''
    // We'll traverse this array by moving left and right pointers upward at each step.
    // Once we've encountered a sequence of all integers (left and right being 1 apart in number value),
    // we'll start incrementing right and rangeFinder to look for the end of the range.
    let left = 0
    let right = 1
    let rangeFinder = 0

    while (left <= list.length - 1) {
        let rangeWidth = 2
        // We're looking at a potential range to extract, as these two integers are only 1 apart in value.
        if (list[right] === list[left] + 1) {
            result += `${list[left]}`
            rangeFinder = right + 1
            // Now we send our second and third right-most pointers to find the end of the current range.
            while (list[rangeFinder] === list[right] + 1) {
                rangeFinder++
                right++
                rangeWidth++
            }
            // If we've got at least 3 consecutive integers in an interval, we can omit the middle numbers
            // we skipped over simply by grabbing right's current index position.
            if (rangeWidth >= 3) {
                result += `-${list[right]},`
                left = rangeFinder
                right = left + 1
            } else {
                // Otherwise if the width is 2, that means we haven't skipped over anything, so we can just add right
                // as normal.
                result += `,${list[right]},`
                left = right + 1
                right = left + 1
            }
        } else {
            // In this case the numbers aren't just 1 apart, so add normally.
            result += `${list[left]},`
            left++
            right++
        }
    }
    // Slicing to remove trailing comma. ¯\_(ツ)_/¯
    return result.slice(0, -1)
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))