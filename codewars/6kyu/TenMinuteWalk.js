// https://www.codewars.com/kata/54da539698b8a2ad76000228/solutions/javascript
function isValidWalk(walk) {
    // We can keep track of our center position. Home is (0, 0).
    // So we know if we don't end up at 0, 0, then we didn't return home.
    let horizontal = 0
    let vertical = 0
    let time = 0

    for (const direction of walk) {
        time++
        switch (direction) {
            case 'e':
                horizontal++
                break
            case 'w':
                horizontal--
                break
            case 'n':
                vertical++
                break
            case 's':
                vertical--
        }
    }
    return time === 10 && horizontal === 0 && vertical === 0
}

const t1 = ['n','s','n','s','n','s','n','s','n','s']         // true
const t2 = ['w','e','w','e','w','e','w','e','w','e','w','e'] // false
const t3 = ['w']                                             // false
const t4 = ['n','n','n','s','n','s','n','s','n','s']         // false
const tests = [t1, t2, t3, t4]

for (const test of tests) {
    console.log(isValidWalk(test))
}