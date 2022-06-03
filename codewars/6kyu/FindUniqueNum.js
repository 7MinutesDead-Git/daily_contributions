// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
    for (let i = 0; i < arr.length; i++) {
        // Since all but one number will be the same,
        // we can find the unique number with a 3 number-wide window.
        const window = [arr[i], arr[i+1], arr[i+2]]
        for (const num of window)
            // This is getting a count of num within the 3 number window
            // and checking if its count is 1 (unique).
            if (window.filter(countMe => countMe === num).length === 1)
                return num
    }
}

console.log(findUniq([5, 2, 2]))
console.log(findUniq([2, 5, 2, 2]))
console.log(findUniq([2, 2, 2, 5]))