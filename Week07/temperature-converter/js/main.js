//Write your pseduo code first! 
//0 -> 32
document.querySelector('#yell').addEventListener('click', convert)

function convert() {
    //need the value that is in celcius
    let inputValue = document.querySelector('#sel').value
    document.querySelector('#placeToYell').innerText = inputValue * 9 / 5 + 32
}

