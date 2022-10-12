function goodness(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log('Goodness')
        }
        else if (i % 3 === 0) {
            console.log('Good')
        }
        else if (i % 5 === 0) {
            console.log('ness')
        }
        else {
            console.log(i)
        }
    }
}

goodness(50)