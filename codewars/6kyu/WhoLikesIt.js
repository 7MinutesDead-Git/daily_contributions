// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
function likes(names) {
    const count = names.length
    const suffix = "like this"
    const singularSuffix = "likes this"

    switch (count) {
        case 0: return `no one ${singularSuffix}`
        case 1: return `${names[0]} ${singularSuffix}`
        case 2: return `${names[0]} and ${names[1]} ${suffix}`
        case 3: return `${names[0]}, ${names[1]} and ${names[2]} ${suffix}`
        default: return `${names[0]}, ${names[1]} and ${count - 2} others ${suffix}`
    }
}