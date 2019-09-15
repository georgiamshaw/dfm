// MOCK DATA

const mockData = {
   "left_label": "leave",
   "right_label": "remain",
   "news": [{
       "source_name": "Gizmodo.com",
       "title": "UK Government Plans to Collect 'Targeted and Personalized' Data on Internet Users to Prepare For Brexit: Report",
       "url": "https://lifehacker.com/what-you-should-know-about-a-no-deal-brexit-1837665694",
       "position": "0"
     },
     {
       "source_name": "The New York Times",
       "title": "Taliban, Brexit, Juul: Your Monday Evening Briefing",
       "url": "https://www.nytimes.com/2019/09/09/briefing/taliban-brexit-juul.html",
       "position": "10"
     },
     {
       "source_name": "The New York Times",
       "title": "Boris Johnson’s Do-or-Die Debacle",
       "url": "https://www.nytimes.com/2019/09/06/opinion/boris-johnson-brexit-election.html",
       "position": "20"
     },
     {
       "source_name": "Mashable",
       "title": "Portuguese national interrupts TV interview, gives moving speech about Brexit's impact",
       "url": "https://mashable.com/article/brexit-portuguese-national-sky-news-interview/",
       "position": "30"
     },
     {
       "source_name": "Mashable",
       "title": "Petition against suspending parliament ahead of Brexit passes 1.3 million signatures",
       "url": "https://mashable.com/article/brexit-prorogation-petition/",
       "position": "40"
     },
     {
       "source_name": "BBC News",
       "title": "UK government to ask Queen to suspend Parliament",
       "url": "https://www.bbc.co.uk/news/uk-politics-49493632",
       "position": "50"
     },
     {
       "source_name": "CNN",
       "title": "Analysis: Trump barges into Britain's Brexit crisis",
       "url": "https://www.cnn.com/2019/08/28/politics/trump-johnson-brexit/index.html",
       "position": "60"
     },
     {
       "source_name": "Reuters",
       "title": "Britain to 'unshackle' officials from most EU meetings ahead of Brexit",
       "url": "https://www.reuters.com/article/us-britain-eu-meetings-idUSKCN1VA1GH",
       "position": "70"
     },
     {
       "source_name": "Reuters",
       "title": "UK getting positive reception from Europe on Brexit plan: Raab",
       "url": "https://www.reuters.com/article/us-britain-eu-raab-europe-idUSKCN1VO0KG",
       "position": "80"
     },
     {
       "source_name": "BBC News",
       "title": "Brexit: Labour urges Parliament recall after no-deal Brexit papers released",
       "url": "https://www.bbc.co.uk/news/uk-politics-49671566",
       "position": "90"
     },
     {
       "source_name": "The New York Times",
       "title": "Boris Johnson Shortens the Fuse on Brexit",
       "url": "https://www.nytimes.com/2019/08/28/opinion/brexit-parliament.html",
       "position": "100"
     }
   ]
 }

// POPULATE PAGE


const mainContainer = document.querySelector('.article-slider-container')
for (let x = 0; x < mockData.news.length; x++) {
  let newArticle = document.createElement('section');
  newArticle.setAttribute('class', 'article-container');
  newArticle.setAttribute('id', mockData.news[x].position);
  newArticle.setAttribute('style', `margin-left: ${mockData.news[x].position}%`);

  let newPosition = document.createElement('p');
  newPosition.setAttribute('class', 'article-position');
  newPosition.innerText = `Position: ${mockData.news[x].position}%`;
  newArticle.appendChild(newPosition);

  let newTitle = document.createElement('h2');
  newTitle.setAttribute('class', 'article-title');
  newTitle.innerText = mockData.news[x].title;
  newArticle.appendChild(newTitle);

  let newLink = document.createElement('a');
  newLink.setAttribute('href', mockData.news[x].url);
  newLink.setAttribute('class', 'article-link');
  newLink.innerText = mockData.news[x].source_name;
  newArticle.appendChild(newLink);

  newArticle.setAttribute('style', `display: none;`)
  if (mockData.news[x].position === 50) {
    newArticle.setAttribute('style', `display: block;`)
  }
  mainContainer.appendChild(newArticle);

}




// DISPLAY RELEVANT ARTICLE BASED ON SLIDER VALUE

const sliderButton = document.querySelector('.slider-input');
const sliderValue = document.querySelector('.slider-value');

sliderButton.addEventListener('change', (event) => {
  let containers = document.querySelectorAll('.article-container');
  containers.forEach(article => {article.style.display = 'none'});
  // sliderValue.innerText = `Position: ${event.target.value}`;
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
