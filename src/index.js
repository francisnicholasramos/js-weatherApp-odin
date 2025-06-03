import weather from './weather'
import display from './display'


const form = document.querySelector('form')
const input = document.querySelector('input')
const button = document.querySelector('button')

form.addEventListener('submit', (e) => {
  e.preventDefault();
})

button.addEventListener('click', async () => {
  if (input.value === "") return;
  const weatherData = await weather.getData(input.value)
  display.setSearchResult(weatherData)
})

// ** TO COMPLETE **

// DTR
// Picture Documentation (min of 4 pics)
// Endorsement Letter

// ** DONE **
// MOA
// Certificate of Completion
// Evaluation Form
