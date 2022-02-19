// Functions. ----------------------------------------
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
    gamerChair.style.filter = `hue-rotate(${getRandomAngle()}deg)`
    document.body.style.backgroundColor = bgColor
    // This is to avoid making the text color identical to the background color.
    document.body.style.color = textColor !== bgColor ? textColor : '#fff'
    // This is to style the content inside the buttons to maintain a coherent theme.
    unorderedListItems.forEach(li => {
        li.style.color = bgColor
    })
}

// Add event listener to update body background and text colors on click.
function styleOnClick(btn, listItems) {
    btn.addEventListener('click', e => {
        const bg_color = getComputedStyle(e.target).backgroundColor
        const text_color = getComputedStyle(getRandomItem(listItems)).backgroundColor
        updateColors(bg_color, text_color)
    })
}

// Add event listener to buttons for fast gold border on hover.
function styleOnMouseEnter(btn) {
    btn.addEventListener('mouseenter', e => {
        btn.style.color = 'gold'
        btn.style.transitionDuration = '0.1s'
    })
}

// Add event listener to buttons for slow border fade when mouse leaves.
function styleOnMouseOut(btn) {
    btn.addEventListener('mouseout', e => {
        btn.style.transitionDuration = '0.7s'
        btn.style.color = getComputedStyle(document.body).backgroundColor
    })
}

// Add all event listeners for each background change button.
function createEventListeners(listOfButtons) {
    listOfButtons.forEach(btn => {
        styleOnClick(btn, listOfButtons)
        styleOnMouseEnter(btn, listOfButtons)
        styleOnMouseOut(btn, listOfButtons)
    })
}


// Start here. ------------------------------------------
const unorderedListItems = document.querySelectorAll('li')
const gamerChair = document.querySelector('img')
createEventListeners(unorderedListItems)