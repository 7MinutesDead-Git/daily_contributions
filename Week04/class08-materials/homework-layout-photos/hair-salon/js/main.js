const caroselButtons = document.querySelectorAll('.btn-carosel')
const heroBackground = document.querySelector('.hero-bg-toggle')


function toggleOpacity(heroBG) {
    if (heroBG.style.opacity === '1'){
        heroBG.style.opacity = '0'
        return
    }
    heroBG.style.opacity = '1'
    console.log('boop')
}

// Set cycle functionality for carosel buttons.
caroselButtons.forEach(btn => btn.addEventListener('click', e => {
    toggleOpacity(heroBackground)
}))

// Set background cycle on timer.
setInterval(toggleOpacity, 5000, heroBackground)
