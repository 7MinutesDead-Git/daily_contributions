// Functions. ----------------------------------------

// ----------------------------------------------
// Retrieve a random value from an array.
function getRandomItem(array) {
    return array[array.length * Math.random() << 0]
}

// ----------------------------------------------
// Get random angle between 90 and 360. 90 as the min so there is some
// noticeable variation in each call.
function getRandomAngle() {
    return (Math.random() * 360) + 90
}

// ----------------------------------------------
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

// ----------------------------------------------
// Add event listener to update body background and text colors on click.
// If shift key is held during click, then the color will be added to the mix.
function styleOnClick(btn, listItems) {
    btn.addEventListener('click', event => {
        if (event.shiftKey) {
            activeElement = null
            const bg_color = getComputedStyle(event.target).backgroundColor
            baseStyle = bg_color
            updateColorMix(bg_color)
            mixNewColors(colorsToMix)
            flashOnPress(event.target)
        }
        else {
            const bg_color = getComputedStyle(event.target).backgroundColor
            const text_color = getComputedStyle(getRandomItem(listItems)).backgroundColor
            updateColors(bg_color, text_color)
        }
    })
}

// ----------------------------------------------
// Add event listener to buttons for fast gold border on hover.
function styleOnMouseEnter(btn) {
    btn.addEventListener('mouseenter', mouseEvent => {
        activeElement = mouseEvent.target
        btn.style.color = 'gold'
        btn.style.transitionDuration = '0.1s'
    })
}

// ----------------------------------------------
// Add event listener to buttons for slow border fade when mouse leaves.
function styleOnMouseOut(btn) {
    activeElement = null
    btn.addEventListener('mouseout', e => {
        btn.style.transitionDuration = '0.7s'
        btn.style.color = getComputedStyle(document.body).backgroundColor
    })
}

// ----------------------------------------------
// Add all event listeners for each background change button.
function createEventListeners(listOfButtons) {
    listOfButtons.forEach(btn => {
        styleOnClick(btn, listOfButtons)
        styleOnMouseEnter(btn, listOfButtons)
        styleOnMouseOut(btn, listOfButtons)
    })
}

// ----------------------------------------------
// Add clicked button's background color to the mix.
// Limit the number of colors in the mix to 3.
function updateColorMix(newColor) {
    colorsToMix.push(newColor)

    if (colorsToMix.length > colorMixMaxAmount) {
        colorsToMix.shift()
    }
}

// ----------------------------------------------
// Mix the colors present in colorsToMix array, then apply to mix button background.
function mixNewColors(rgbArray) {
    const reds = []
    const greens = []
    const blues = []
    const allColors = [reds, greens, blues]

    // This is assuming rgb(r, g, b) format.
    for (const color of rgbArray) {
        const colorValues = color.split(',')
        for (const [i, colorGroup] of allColors.entries()) {
            colorGroup.push(getIntFromString(colorValues[i]))
        }
    }

    const redMix = getAverage(reds)
    const greenMix = getAverage(greens)
    const blueMix = getAverage(blues)
    mixButton.style.backgroundColor = `rgb(${redMix}, ${greenMix}, ${blueMix})`
}

// ----------------------------------------------
// Get the average value of an array of numbers.
function getAverage(array) {
    return array.reduce((a, b) => a + b) / array.length
}

// ----------------------------------------------
function getIntFromString(string) {
    return parseInt(string.match(/\d+/g)[0])
}

// ----------------------------------------------
// Apply flash-like animation to array of elements passed in when called.
// Reset styles to baseStyle after animation is complete.
function flashOnPress(element) {
    element.style.transitionDuration = '0.1s'
    element.style.transform = 'scale(1.1)'
    element.style.border = '0.5rem solid gold'
    setTimeout(styleReset.bind(null, element), 100)
}

// ----------------------------------------------
// Resets any altered styles back to baseStyle for a given element.
function styleReset(element) {
    for (const style in element.style) {
        if (element.style !== baseStyle) {
            element.style[style] = baseStyle[style]
        }
    }
}


// Start here. ------------------------------------------
let activeElement = null
let baseStyle = null
const colorsToMix = []
const colorMixMaxAmount = 3
const unorderedListItems = document.querySelectorAll('li')
const mixButton = document.querySelector('.mix')
const gamerChair = document.querySelector('img')
createEventListeners(unorderedListItems)