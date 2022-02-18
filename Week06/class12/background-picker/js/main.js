// Functions. --------------------------------------------------------------------------------
// Retrieve a random value from an array.
function getRandomItem(array) {
    return array[array.length * Math.random() << 0]
}

// Get random angle between 90 and 360.
function getRandomAngle() {
    return (Math.random() * 360) + 90
}

// Update the body background and text colors.
function updateColors(bgColor, textColor) {
    document.body.style.backgroundColor = bgColor
    // This is to avoid making the text color identical to the background color.
    document.body.style.color = textColor !== bgColor ? textColor : '#fff'
    // This is to style the content inside the buttons to maintain a coherent theme.
    unorderedListItems.forEach(li => {
        li.style.color = bgColor
    })
    gamerChair.style.filter = `hue-rotate(${getRandomAngle()}deg)`
}

// Add click event listeners to background change buttons.
function makeItemsClickable(items){
    items.forEach(li => li.addEventListener('click', e => {
        const bg_color = getComputedStyle(e.target).backgroundColor
        const text_color = getComputedStyle(getRandomItem(unorderedListItems)).backgroundColor
        updateColors(bg_color, text_color)
    }))
}


// Start here. --------------------------------------------------------------------------------
const unorderedListItems = document.querySelectorAll('li')
const gamerChair = document.querySelector('img')
makeItemsClickable(unorderedListItems)

unorderedListItems.forEach(li => li.addEventListener('mouseenter', e => {
    li.style.color = 'gold'
    li.style.transitionDuration = '0.1s'
}))
unorderedListItems.forEach(li => li.addEventListener('mouseout', e => {
    li.style.transitionDuration = '0.7s'
    li.style.color = getComputedStyle(document.body).backgroundColor
}))