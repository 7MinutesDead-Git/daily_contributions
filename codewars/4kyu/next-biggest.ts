// If all digits sorted in descending order, then output is always “Not Possible”.
//    For example, 4321.
// If all digits are sorted in ascending order, then we need to swap last two digits.
//     For example, 1234.
// For other cases, we need to process the number from rightmost side
// because we need to find the smallest of all greater numbers.
export function nextBigger(n: number): number {
    // Convert number to string, then to array of digits.
    const digits = n.toString().split("").map(Number)
    // Find the first digit that is smaller than the digit on its right.
    let first = digits.length - 1
    while (first > 0 && digits[first-1] >= digits[first]) {
        first--
    }
    // If no such digit is found, then all digits are in descending order.
    // No greater number is possible with the same set of digits.
    if (!first) {
        return -1
    }
    // Now find the smallest digit on right side of (i-1)'th digit that is greater than digits[i-1]
    let second = digits.length - 1
    while (digits[second] <= digits[first-1]) {
        second--
    }
    // Swap the smallest digit we found with digits[i-1]
    [digits[first-1], digits[second]] = [digits[second], digits[first-1]]
    // Sort the digits after (i-1) in ascending order.
    const sortedSection = digits.slice(first).sort((a, b) => a - b)
    digits.splice(first, digits.length - first, ...sortedSection)
    // Convert array back to number.
    return Number(digits.join(""))
}