function arrayDiff(array, targets) {
    return array.filter(entry => {
        return !targets.includes(entry)
    })
}

console.log(arrayDiff([3, 4], [3]))