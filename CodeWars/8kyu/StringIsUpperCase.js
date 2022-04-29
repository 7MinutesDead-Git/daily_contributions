// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript
String.prototype.isUpperCase = function() {
    const lower = [..."abcdefghijklmnopqrstuvywxyz"]
    for (const char of this) {
        if (lower.indexOf(char) !== -1)
            return false
    }
    return true
}