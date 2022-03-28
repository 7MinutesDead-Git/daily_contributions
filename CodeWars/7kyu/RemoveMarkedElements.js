function removeMarked(integer_list, values_list) {
    for (let i = 0; i < integer_list.length; i++) {
        if (values_list.includes(integer_list[i])) {
            // Since we'll modify the array in place, we need to scoot our pointer
            // back one when we remove one element, otherwise we'll skip the next element.
            integer_list.splice(i, 1)
            i--
        }
    }
    return integer_list
}

// Using filter method is really nice and clean.
function removeMarkedClever(integer_list, values_list) {
    return integer_list.filter(element => {
        return values_list.indexOf(element) === -1
    })
}

intList = [1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8]
valueList = [1, 3, 4, 2]
console.log(removeMarked(intList, valueList))