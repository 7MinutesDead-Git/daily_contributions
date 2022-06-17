// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
function getMiddle(s) {
    const mid = s.length / 2

    if (s.length % 2 === 0)
        return s.slice(mid-1, mid+1)
    else
        return s.slice(mid, mid+1)
}