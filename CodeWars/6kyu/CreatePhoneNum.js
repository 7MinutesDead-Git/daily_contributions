// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
function createPhoneNumber(numbers){
    numbers = numbers.reduce((string, number) => string + number, "")
    const areaCode = numbers.slice(0, 3)
    const exchangeCode = numbers.slice(3, 6)
    const subscriberNum = numbers.slice(6)
    return `(${areaCode}) ${exchangeCode}-${subscriberNum}`
}