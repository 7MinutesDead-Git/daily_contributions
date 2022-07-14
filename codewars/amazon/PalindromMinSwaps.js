function minSwapsRequired(binArray) {
    // Don't need to do anything if we're already ok
    if(isPalindrome(binArray)) {
        return 0;
    }

    // Otherwise let's check if it's even theoretically possible to be a palendrome
    if(!isPossiblePalindrome(binArray)){
        return -1;
    }

    // Otherwise, assume that the number of mismatched pairs can be corrected 2 at a time,
    // as in 1 swap will fix two mismatches
    const misMatchedPairs = getMismatched(binArray);
    const swapsRequired = Math.ceil(misMatchedPairs / 2);
    return swapsRequired;
}

function getMismatched(binArray){
    let misMatched = 0;
    const len = binArray.length;

    for(let i=0; i < Math.floor(len/2); i++) {
        const pairIdx = len - 1 - i;
        if(binArray[i] !== binArray[pairIdx]) {
            misMatched++;
        }
    }

    const isOdd = binArray.length % 2 === 1;
    let hasOddNumberOfOdds;

    if (isOdd) {
        const [countZeros, countOnes] = getZerosAndOnes(binArray);
        hasOddNumberOfOdds = countZeros % 2 === 1;
        const pivotNumber = Math.floor(len/2);
        if(hasOddNumberOfOdds) {
            if (pivotNumber === 0) {
                misMatched++;
            }
        } else {
            // hasOddNumberOfEvens
            if (pivotNumber === 1) {
                misMatched++;
            }
        }
    }

    return misMatched;
}


function isPalindrome(binArray){
    const len = binArray.length;
    for(let i=0; i< Math.floor(len/2); i++) {
        const pairIdx = len - 1 - i;
        if(binArray[i] !== binArray[pairIdx]) {
            return false;
        }
    }
    return true;
}

function isPossiblePalindrome(binArray){
    const len = binArray.length;
    const isEven = (len % 2 === 0);
    const [countZeros, countOnes] = getZerosAndOnes(binArray);
    if(isEven) {
        //console.log("IsEven", countZeros, countOnes)
        if ((countZeros % 2 === 0) && (countOnes % 2 === 0)) {
            return true;
        }
    } else {
        //console.log("IsOdd", countZeros, countOnes)
        if (
            (countZeros % 2 === 0) && (countOnes % 2 === 1) ||
            (countZeros % 2 === 1) && (countOnes % 2 === 0)
        ) {
            return true;
        }
    }
    return false;
}

function getZerosAndOnes(binArray) {
    let zeros = 0;
    let ones = 0;
    for(const num of binArray) {
        if (num === 0){
            zeros++;
        } else if (num === 1 ) {
            ones++;
        } else {
            throw new Error('something went wrong')
        }
    }

    // Alternative solution.
    const counts = binArray.reduce((count, num) => count[num]++, {0: 0, 1: 0});

    return [zeros, ones];
}

console.log(minSwapsRequired("101000"))
console.log(minSwapsRequired("1110"))
console.log(minSwapsRequired("110"))
console.log(minSwapsRequired("0"))
console.log(minSwapsRequired("01010111101"))


// console.log(isPalendrome("001001"));
// console.log(isPalendrome("101010"));
// console.log(isPalendrome("010101"));
// console.log(isPalendrome("001001"));
