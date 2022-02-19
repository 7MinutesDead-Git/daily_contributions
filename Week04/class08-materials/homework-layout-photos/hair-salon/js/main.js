caroselButtons = document.querySelectorAll('.btn-carosel')
heroBackground = document.querySelector('.hero-bg-toggle')

caroselButtons.forEach(btn => btn.addEventListener('click', e => {
    if (heroBackground.style.opacity === '1'){
        heroBackground.style.opacity = '0'
        return
    }
    heroBackground.style.opacity = '1'
    console.log('boop')
}))