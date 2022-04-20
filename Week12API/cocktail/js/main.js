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
    const name = document.createElement('h3')
    const instructions = document.createElement('div')
    const image = document.createElement('img')
    const ingredients = getIngredients(data)

    drink.classList.add('drink')
    instructions.classList.add('instructions')

    name.textContent = data['strDrink']
    image.src = data['strDrinkThumb']

    instructions.innerHTML = formatInstructions(data['strInstructions'])


    const drinkInfo = [image, name, ingredients, instructions]

    for (const info of drinkInfo) {
        drink.appendChild(info)
    }
    return drink
}

// -------------------------------------------------------------
function getIngredients(drink) {
    const ingredients = document.createElement('ul')
    const measurementPairs = {}

    for (const key in drink) {
        if (key.includes('Ingredient') && drink[key] !== null) {
            measurementPairs[drink[key]] = key.charAt(key.length - 1)
        }
        if (key.includes('Measure')) {
            for (const ingredient in measurementPairs) {
                const matchingPair = key.charAt(key.length - 1) === measurementPairs[ingredient]
                if (matchingPair && drink[key] !== null) {
                    const li = document.createElement('li')
                    li.textContent = `${ingredient}: ${drink[key]}`
                    ingredients.appendChild(li)
                }
            }
        }
    }
    return ingredients
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