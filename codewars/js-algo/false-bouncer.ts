console.log(falsyBouncer([1, 0, null, '', 5])) // should return [1,5]

function falsyBouncer(array: any[]) {
    return array.filter((value) => {
        return value
    })
}