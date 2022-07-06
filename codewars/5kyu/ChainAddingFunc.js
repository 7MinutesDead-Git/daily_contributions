// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript

// What a clever mess!
// https://stackoverflow.com/a/26658167/13627106
function add(n) {

    function z(m) {
        return add(n+m)
    }

    z.valueOf = () => n
    return z
}