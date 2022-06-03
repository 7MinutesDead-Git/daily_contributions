document.querySelector('#yell').addEventListener('click', run)

function run() {
  const nameFirst = document.querySelector('#nameFirst').value
  const nameMiddlePrefix = document.querySelector('#firstMiddle').value
  const nameMiddle = document.querySelector('#lastMiddle').value
  const nameLast = document.querySelector('#nameLast').value

  document.querySelector('#placeToYell').innerText = `${nameFirst} ${nameMiddlePrefix} ${nameMiddle} ${nameLast}`

  //Add what you should be doing - conditionals go here
}