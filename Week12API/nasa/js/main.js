const button = document.querySelector("button")
const input = document.querySelector("input")

button.addEventListener('click', getFetch)
input.addEventListener('keypress', e => {
    if (e.key === 'Enter') getFetch()
})

const ul = document.querySelector('ul')

function getFetch(){
    const choice = input.value
    const url = `https://www.dnd5eapi.co/api/spells/${choice}`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(`Caught this error: ${err}`)
        })
}

