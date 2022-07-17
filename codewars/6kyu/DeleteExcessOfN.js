// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
function deleteNth(arr,n) {
    const counts = {}
    return arr.filter(num => {
        counts[num] = (counts[num] ?? 0) + 1
        return counts[num] <= n
    })
}

console.log(deleteNth([1,1,3,3,7,2,2,2,2],3))