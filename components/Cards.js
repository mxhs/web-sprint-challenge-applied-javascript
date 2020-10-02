import axios from 'axios'

// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then(res =>{
        console.log("this is the res", res)
        console.log(res.data.articles)
        const articleTopics = Object.values(res.data.articles)
        console.log("here", articleTopics)
        
        articleTopics.forEach(topic => {
            const articlesByTopic = Object.values(topic)
            console.log("this guy", articlesByTopic)
            articlesByTopic.forEach(item =>{
                articleEntryPoint.append(articleMaker(item))
                console.log("Hi guy", item)
            })
        })
    })
    .catch(err =>{
        console.log(err)
    })

function articleMaker(object){
    //Instantiated Elements
    const article = document.createElement('div')
    const headline = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imgDiv = document.createElement('div')
    const img = document.createElement('img')
    const authorName = document.createElement('span')

    //Added Classes
    article.classList.add('card')
    headline.classList.add('headline')
    authorDiv.classList.add('author')
    imgDiv.classList.add('img-container')

    //Added attributes
    headline.textContent = object.headline
    img.src = object.authorPhoto
    authorName.textContent = `By ${object.authorName}`

    article.addEventListener('click', ()=>{
        console.log(object.headline)
    })

    //Structure Setup
    article.append(headline, authorDiv)
    authorDiv.append(imgDiv, authorName)
    imgDiv.append(img)

    return article
}

const articleEntryPoint = document.querySelector('.cards-container')