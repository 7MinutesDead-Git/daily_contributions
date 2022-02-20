// Functions -----------------------------------------------------------------

// Apply flash-like animation to array of elements passed in when called.
// Reset styles to baseStyle after animation is complete.
function flashOnPress(elementsToFlash) {
  for (const element of elementsToFlash){
    element.style.transitionDuration = '0.1s'
    element.style.transform = 'scale(1.1)'
    element.style.backgroundColor = 'gold'
    setTimeout(styleReset.bind(null, element), 100)
  }
}

// Resets any altered styles back to baseStyle for a given element.
function styleReset(element) {
  for (const style in element.style) {
    if (element.style !== baseStyle) {
      element.style[style] = baseStyle[style]
    }
  }
}

// Get a random number between min and max.
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Apply a random translation offset.
// Call on short interval for vibration effect.
function vibrate(element) {
  element.style.transform = `translate(${getRandomNumber(-2, 2)}px, ${getRandomNumber(-3, 3)}px)`
}

// Setup all event listeners for each button.
function setupEventListeners(listItems) {
  for (const li of listItems) {
    // This is so we can create "calculator" functionality based on
    // the numbers in the buttons themselves. No need for button IDs.
    const value = parseFloat(li.innerText)

    // --------------------------------
    li.addEventListener('click', e => {
      if (value === 0) {
        runningTotal = value
      } else {
        runningTotal += value
      }
      document.querySelector('#result').innerText = runningTotal
      const elementsToFlash = [li, document.body]
      flashOnPress(elementsToFlash)
    })

    // --------------------------------
    li.addEventListener('mouseenter', e => {
      const vibrationTimer = setInterval(vibrate.bind(null, li), 30)
      // ------------------------------
      // Nesting this allows us to clear the interval when the mouse leaves the element.
      // Surely there's a better way to do this.
      li.addEventListener('mouseleave', e => {
        clearInterval(vibrationTimer)
        styleReset(li)
      })
    })
  }

}


// Start here. ---------------------------------------------------------------
const listItems = document.querySelectorAll('li')
let runningTotal = 0
// Get the initial styles of the list items so we can easily reset after modification.
const baseStyle = getComputedStyle(listItems[0])
setupEventListeners(listItems)