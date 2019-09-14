
const sliderButton = document.querySelector('.slider-input');
const sliderValue = document.querySelector('.slider-value');

// DISPLAY RELEVANT ARTICLE BASED ON SLIDER VALUE
sliderButton.addEventListener('change', (event) => {
  let containers = document.querySelectorAll('.article-container');
  containers.forEach(article => {article.style.display = 'none'});
  sliderValue.innerText = event.target.value;
  document.getElementById(`${event.target.value}`).setAttribute('style', 'display:block');
})

// PULL DATA FROM FRONT END
const dataUrl = '../../src/data.json'
let parsedData = {};

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

// URL TRIMMER
const articleUrl = 'https://www.theguardian.com/politics/2019/sep/13/david-cameron-accuses-boris-johnson-and-michael-gove-of-behaving-appallingly-over-brexit'
const urlTrimmer = (url) => {
  return url.split('//')[1].split('/')[0];
}
