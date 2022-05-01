// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
function generateHashtag (str) {
    if (str.trim() === "")
        return false

    const words = str.split(" ").filter(word => word !== "")

    const formatted = words.map(word => {
        const firstLetter = word[0].toUpperCase()
        return firstLetter + word.slice(1)
    })

    const result = "#" + formatted.join("")
    if (result.length <= 140)
        return result
    else
        return false
}