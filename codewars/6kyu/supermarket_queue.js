// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript
// WIP

function queueTime(customers, n) {
    let totalTime = 0
    let window = 0
    let largest = 0

    for (const person of customers) {
        window++
        if (window < n) {
            if (person > largest) {
                largest = person
            }
        }
        else {
            totalTime += largest
            largest = 0
            window = 0
        }
    }
    return totalTime
}