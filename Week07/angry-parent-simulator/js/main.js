const synth = window.speechSynthesis;
document.querySelector('#yell').addEventListener('click', yellAtMe)

function yellAtMe() {
  const names = document.querySelectorAll('input')
  let yellText = ''

  for (const name of names) {
    if (name.value !== ''){
      yellText += `${name.value} `
    }
  }

  document.querySelector('#placeToYell').innerText = yellText
  synth.speak(new SpeechSynthesisUtterance(yellText));
}
