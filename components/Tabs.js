import axios from 'axios'

// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios
    .get('https://lambda-times-api.herokuapp.com/topics')
    .then(res =>{
        console.log(res)
        const topics = Array.from(res.data.topics)

        topics.forEach(item =>{
            tabEntryPoint.append(tabMaker(item)) //How can I make this show as the object string value?
        })
        
    })
    .catch(err =>{
        console.log(err)
    })

function tabMaker(object){
    const topic = document.createElement('div')

    topic.classList.add('tab')

    topic.textContent = object

    return topic
}

const tabEntryPoint = document.querySelector('div.topics')



// tabEntryPoint.append(tabMaker(topics))