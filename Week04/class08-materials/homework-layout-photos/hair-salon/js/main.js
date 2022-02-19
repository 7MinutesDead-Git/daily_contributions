const caroselButtons = document.querySelectorAll('.btn-carosel')
const heroBackground = document.querySelector('.hero-bg-toggle')

// Toggle the opacity of the given element.
function toggleOpacity(element) {
    if (element.style.opacity === '1'){
        element.style.opacity = '0'
        return
    }
    element.style.opacity = '1'
}

// Allows background cycle on timer to reset each time the user manually clicks the
// carosel button. This way if the user wants to see a specific background, they can
// do so without the background suddenly cycling away.
function resetInterval(heroBackground) {
    clearInterval(opacityToggleInterval)
    opacityToggleInterval = setInterval(toggleOpacity, 7000, heroBackground)
}

// Set cycle functionality for carosel buttons.
caroselButtons.forEach(btn => btn.addEventListener('click', e => {
    toggleOpacity(heroBackground)
    resetInterval(heroBackground)
}))

// Set background cycle on timer.
let opacityToggleInterval = setInterval(toggleOpacity, 7000, heroBackground)
