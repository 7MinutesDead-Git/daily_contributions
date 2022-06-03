document.querySelector('#yell').addEventListener('click', convert)

function convert() {
    let inputValue = document.querySelector('#sel').value
    document.querySelector('#placeToYell').innerText = inputValue * 9 / 5 + 32
}

