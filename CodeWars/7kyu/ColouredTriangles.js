// https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111/train/javascript
function triangle(row) {
    row = [...row]
    const colors = ['R', 'G', 'B']

    while (row.length > 1) {
        row = row.map((x, i) => {
            if (row[i] === row[i + 1]) {
                return row[i]
            } else {
                const currentColors = [row[i], row[i + 1]]
                for (const color of colors) {
                    if (currentColors.indexOf(color) === -1)
                        return color
                }
            }
        })
        row = row.slice(0, row.length - 1)
    }
    return row[0]
}

console.log(triangle('RBRGBRBGGRRRBGBBBGG')) // 'G'