// Find the greatest common divisor of two positive integers.
// The integers can be large, so you need to find a clever solution.
//
// The inputs x and y are always greater or equal to 1, so
// the greatest common divisor will always be an integer that is also greater or equal to 1.
//
// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)

function mygcd(x, y) {
    if (y === 0) {
        // If the second number is 0, the greatest common divisor is the first number.
        return x
    }
    // Otherwise, find the remainder of dividing the first number by the second number.
    let r = x % y
    // Recursively call the function with the second number and the remainder as the new inputs.
    return mygcd(y, r)
}