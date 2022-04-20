const button = document.querySelector("button")
const input = document.querySelector("input")
const errorSpan = document.querySelector(".error-text")
const cocktailList = document.querySelector('.cocktails')


// -------------------------------------------------------------
function setupListeners() {
    button.addEventListener('click', getFetch)
    input.addEventListener('keypress', e => {
        if (e.key === 'Enter')
            getFetch()
    })
}

// -------------------------------------------------------------
function setupDrinkListeners() {
    const drinkButtons = document.querySelectorAll('.drink')
    drinkButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            focusDrink(button)
        })
    })
}

// -------------------------------------------------------------
function focusDrink(drink) {
    // TODO:
    //  Hide / fade other drinks that aren't chosen.
    //  Bring drink to front and center.
    //  Show drink instructions.
    drink.classList.toggle('viewing')
    console.log(drink)
}

// -------------------------------------------------------------
function getFetch() {
    clearList()
    const choice = input.value
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`

    fetch(url)
        .then(res => {
            renderError(res.status)
            return res.json()
        })
        .then(data => {
            renderDrinks(data)
            setupDrinkListeners()
            console.log(data)
        })
        .catch(err => {
            console.log(`Caught this error: ${err}`)
        })
}

// -------------------------------------------------------------
function renderError(code) {
    if (code === 404){
        errorSpan.innerHTML = `Can't find ${input.value}. Check the spelling perhaps.`
    }
}

// -------------------------------------------------------------
function renderDrinks(data) {
    if (data['drinks']) {
        for (const drink of data['drinks']) {
            cocktailList.appendChild(createDrinkBlock(drink))
        }
    } else {
        renderError(404)
    }
}

// -------------------------------------------------------------
function createDrinkBlock(data) {
    const drink = document.createElement('li')
    const drinkName = document.createElement('h3')
    const drinkInstructions = document.createElement('div')
    const drinkImg = document.createElement('img')

    drink.classList.add('drink')
    drinkName.textContent = data['strDrink']
    drinkImg.src = data['strDrinkThumb']
    drinkInstructions.classList.add('instructions')
    drinkInstructions.innerHTML = formatInstructions(data['strInstructions'])

    const drinkInfo = [drinkImg, drinkName, drinkInstructions]

    for (const info of drinkInfo) {
        drink.appendChild(info)
    }
    return drink
}

// -------------------------------------------------------------
function clearList() {
    cocktailList.innerHTML = ''
}

// -------------------------------------------------------------
function formatInstructions(instructions) {
    const array = instructions.split('.')
    let result = ''

    for (const instruction of array) {
        if (instruction.length > 0) {
            result += `<p>${instruction}.</p>`
        }
    }

    return result
}


// -------------------------------------------------------------
window.onload = setupListeners