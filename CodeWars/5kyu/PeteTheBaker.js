// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
function cakes(recipe, available) {
    const bakable = {}

    for (const required in recipe) {
        if (!(required in available))
            return 0
        bakable[required] = available[required] / recipe[required]
    }

    const amounts = Object.values(bakable)
    return Math.floor(Math.min(...amounts))
}