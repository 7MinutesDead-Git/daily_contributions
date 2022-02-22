const classDays = ['tuesday', 'thursday']
const weekendDays = ['friday', 'saturday', 'sunday']
const boringDays = ['monday', 'wednesday']

function check() {
  const day = document.querySelector('#day').value.toLowerCase()
  console.log(day)
  const placeToSee = document.querySelector('#placeToSee')

  if (classDays.includes(day)) {
    placeToSee.innerText = 'class time!'
  }
  else if (weekendDays.includes(day)) {
    placeToSee.innerText = 'weekend time!'
  }
  else if (boringDays.includes(day)) {
    placeToSee.innerText = "Ehh.. it's a day!"
  }
  else {
    placeToSee.innerText = 'Not a valid day!'
  }
}

document.querySelector('#check').addEventListener('click', check)