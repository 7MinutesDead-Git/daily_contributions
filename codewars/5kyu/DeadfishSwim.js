// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript
// Return the output array, and ignore all non-op characters
function parse( data )
{
    let result = []
    let num = 0
    for (const command of data) {
        if (command === 'i')
            num++
        if (command === 'd')
            num--
        if (command === 's')
            num = num**2
        if (command === 'o')
            result.push(num)
    }
    return result
}
