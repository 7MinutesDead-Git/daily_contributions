// Functions. ----------------------------------------

// ----------------------------------------------
// Retrieve a random value from an array.
function getRandomItem(array) {
    return array[array.length * Math.random() << 0]
}

// ----------------------------------------------
// Get random angle between 90 and 360.
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
function styleOnClick(btn, listItems) {
    btn.addEventListener('click', e => {
        const bg_color = getComputedStyle(e.target).backgroundColor
        const text_color = getComputedStyle(getRandomItem(listItems)).backgroundColor
        updateColors(bg_color, text_color)
    })
}

// ----------------------------------------------
// Add event listener to buttons for fast gold border on hover.
function styleOnMouseEnter(btn) {
    btn.addEventListener('mouseenter', mouseEvent => {
        activeElement = mouseEvent.target
        btn.style.color = 'gold'
        btn.style.transitionDuration = '0.1s'

        document.addEventListener('keydown', keyEvent => {

            if (keyEvent.code === 'KeyA' && mouseEvent.target === activeElement) {
                activeElement = null
                const bg_color = getComputedStyle(mouseEvent.target).backgroundColor
                baseStyle = bg_color
                updateColorMix(bg_color)
                mixNewColors()
                flashOnPress(mouseEvent.target)
            }
        })
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
function updateColorMix(newColor) {
    colorsToMix.push(newColor)

    if (colorsToMix.length > 3) {
        colorsToMix.shift()
    }
}

// ----------------------------------------------
// Mix the colors present in colorsToMix array, then apply to mix button background.
function mixNewColors() {
    const reds = []
    const blues = []
    const greens = []

    // This is assuming rgb(r, g, b) format.
    for (const color of colorsToMix) {
        const values = color.split(',')
        // There has to be a better way to do this with filter.
        reds.push(parseFloat(values[0].match(/\d+/g)[0]))
        blues.push(parseFloat(values[1].match(/\d+/g)[0]))
        greens.push(parseFloat(values[2].match(/\d+/g)[0]))
    }

    console.log(`reds: ${reds}`)
    console.log(`blues: ${blues}`)
    console.log(`greens: ${greens}`)

    const redMix = getAverage(reds)
    const blueMix = getAverage(blues)
    const greenMix = getAverage(greens)

    mixButton.style.backgroundColor = `rgb(${redMix}, ${blueMix}, ${greenMix})`
}

// ----------------------------------------------
// Get the average value of an array of numbers.
function getAverage(array) {
    return array.reduce((a, b) => a + b) / array.length
}

// ----------------------------------------------
// Apply flash-like animation to array of elements passed in when called.
// Reset styles to baseStyle after animation is complete.
function flashOnPress(li) {
    li.style.transitionDuration = '0.1s'
    li.style.transform = 'scale(1.1)'
    li.style.border = '0.5rem solid gold'
    setTimeout(styleReset.bind(null, li), 100)
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


// ----------------------------------------------
// Start here. ------------------------------------------
let activeElement = null
let baseStyle = null
const colorsToMix = []
const unorderedListItems = document.querySelectorAll('li')
const mixButton = document.querySelector('.mix')
const gamerChair = document.querySelector('img')
createEventListeners(unorderedListItems)