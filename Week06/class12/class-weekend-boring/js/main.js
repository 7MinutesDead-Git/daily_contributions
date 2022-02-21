function check() {
  const day = document.querySelector('#day').value.toLowerCase()
  const placeToSee = document.querySelector('#placeToSee')

  if (classDays.includes(day)) {
    placeToSee.innerText = 'class time!'
  }
  if (weekendDays.includes(day)) {
    placeToSee.innerText = 'weekend time!'
  }
  if (boringDays.includes(day)) {
    placeToSee.innerText = "Ehh.. it's a day!"
  }
  else {
    placeToSee.innerText = 'Not a valid day!'
  }
}

document.querySelector('#check').addEventListener('click', check)
const classDays = ['tuesday', 'thursday']
const weekendDays = ['friday', 'saturday', 'sunday']
const boringDays = ['monday', 'wednesday']