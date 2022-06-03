// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
function towerBuilder(nFloors) {
    const tower = []
    for (let i = 1; i <= nFloors; i++) {
        const gap = " ".repeat(nFloors - i)
        const brick  = "*".repeat((2 * i) - 1)
        tower.push(`${gap}${brick}${gap}`)
    }
    return tower
}