export const likes = (a : string[]) : string => {
    // Scalable solution thanks to the requirements lol.
    if (a.length === 0) {
        return "no one likes this"
    }
    if (a.length === 1) {
        return `${a[0]} likes this`
    }
    if (a.length === 2) {
        return `${a[0]} and ${a[1]} like this`
    }
    if (a.length === 3) {
        return `${a[0]}, ${a[1]} and ${a[2]} like this`
    }

    const remaining = a.length - 2
    return `${a[0]}, ${a[1]} and ${remaining} others like this`
}