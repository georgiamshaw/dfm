
const sliderButton = document.querySelector('.slider-input');
const sliderValue = document.querySelector('.slider-value');

sliderButton.addEventListener('change', (event) => {
  console.log(event.target.value);
  sliderValue.innerText = event.target.value;
})


const dataUrl = '../../src/data.json'
window.onload = () => {
  console.log('Window loaded');
  // fetch(dataUrl)
  //   .then(data => {
  //     console.log('fetch runs');
  //     data.json()
  //   })
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err))
}

const articleUrl = 'https://www.theguardian.com/politics/2019/sep/13/david-cameron-accuses-boris-johnson-and-michael-gove-of-behaving-appallingly-over-brexit'

const urlTrimmer = (url) => {
  return url.split('//')[1].split('/')[0];
}

console.log(urlTrimmer(articleUrl));
