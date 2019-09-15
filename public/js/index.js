// MOCK DATA

const mockData = {
  "left_label": "leave",
  "right_label": "remain",
  "news": [{
    "source_name": "Lifehacker.com",
    "title": "What You Should Know About a 'No-Deal' Brexit",
    "url": "https://lifehacker.com/what-you-should-know-about-a-no-deal-brexit-1837665694",
    "position": "0"
  }, {
    "source_name": "The New York Times",
    "title": "Your Wednesday Briefing",
    "url": "https://www.nytimes.com/2019/09/04/briefing/dorian-brexit-ariana-grande.html",
    "position": "10"
  }, {
    "source_name": "Mashable",
    "title": "Portuguese national interrupts TV interview, gives moving speech about Brexit's impact",
    "url": "https://mashable.com/article/brexit-portuguese-national-sky-news-interview/",
    "position": "20"
  }, {
    "source_name": "The New York Times",
    "title": "Your Tuesday Briefing",
    "url": "https://www.nytimes.com/2019/09/03/briefing/boat-fire-brexit-naomi-osaka.html",
    "position": "30"
  }, {
    "source_name": "The New York Times",
    "title": "Your Thursday Briefing",
    "url": "https://www.nytimes.com/2019/09/05/briefing/south-carolina-brexit-us-open.html",
    "position": "40"
  }, {
    "source_name": "CNN",
    "title": "'Fight to the death' in Parliament over Brexit",
    "url": "https://www.cnn.com/videos/world/2019/09/04/boris-johnson-brexit-parliament-rebel-alliance-vpx.cnn",
    "position": "50"
  }, {
    "source_name": "TechCrunch",
    "title": "Fitbit, Andela, AfricaTech, startups and Brexit, plus content moderation",
    "url": "http://techcrunch.com/2019/08/30/fitbit-andela-africatech-startups-and-brexit-plus-content-moderation/",
    "position": "60"
  }, {
    "source_name": "The New York Times",
    "title": "Taliban, Brexit, Juul: Your Monday Evening Briefing",
    "url": "https://www.nytimes.com/2019/09/09/briefing/taliban-brexit-juul.html",
    "position": "70"
  }, {
    "source_name": "BBC News",
    "title": "Brexit: What happened on Thursday?",
    "url": "https://www.bbc.co.uk/news/av/uk-politics-49601230/brexit-what-happened-on-thursday",
    "position": "80"
  }, {
    "source_name": "BBC News",
    "title": "Brexit: What happened on Monday?",
    "url": "https://www.bbc.co.uk/news/av/uk-politics-49558313/brexit-what-happened-on-monday",
    "position": "90"
  }]
}

// POPULATE PAGE


const mainContainer = document.querySelector('.article-slider-container')
for (let x = 0; x < mockData.news.length; x++) {
  let newArticle = document.createElement('section');
  newArticle.setAttribute('class', 'article-container');
  newArticle.setAttribute('id', mockData.news[x].position);

  let newTitle = document.createElement('h2');
  newTitle.setAttribute('class', 'article-title');
  newTitle.innerText = mockData.news[x].title;
  newArticle.appendChild(newTitle);

  let newLink = document.createElement('a');
  newLink.setAttribute('href', mockData.news[x].url);
  newLink.setAttribute('class', 'article-link');
  newLink.innerText = mockData.news[x].source_name;
  newArticle.appendChild(newLink);

  newArticle.setAttribute('style', 'display: none')
  mainContainer.appendChild(newArticle);
}




// DISPLAY RELEVANT ARTICLE BASED ON SLIDER VALUE

const sliderButton = document.querySelector('.slider-input');
const sliderValue = document.querySelector('.slider-value');

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
