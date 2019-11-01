// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res => {
    res.data.articles.bootstrap.forEach((item) => {
        cardContainer.appendChild(articleCreator(item.headline, item.authorName, item.authorPhoto))
    });
    res.data.articles.javascript.forEach((item) => {
        cardContainer.appendChild(articleCreator(item.headline, item.authorName, item.authorPhoto))
    });
    res.data.articles.jquery.forEach((item) => {
        cardContainer.appendChild(articleCreator(item.headline, item.authorName, item.authorPhoto))
    });
    res.data.articles.node.forEach((item) => {
        cardContainer.appendChild(articleCreator(item.headline, item.authorName, item.authorPhoto))
    });
    res.data.articles.technology.forEach((item) => {
        cardContainer.appendChild(articleCreator(item.headline, item.authorName, item.authorPhoto))
    });
})

function articleCreator(headline, author, img){
    const articleCard = document.createElement('div');
    const articleHeadline = document.createElement('div');
    const articleAuthor = document.createElement('div');
    const articleImage = document.createElement('div');
    const imageSource = document.createElement('img');
    const articleByAuthor = document.createElement('span');

    articleCard.classList.add('card');
    articleHeadline.classList.add('headline');
    articleAuthor.classList.add('author');
    articleImage.classList.add('img-container');

    articleCard.appendChild(articleHeadline);
    articleCard.appendChild(articleAuthor);
    articleAuthor.appendChild(articleImage);
    articleAuthor.appendChild(articleByAuthor);
    articleImage.appendChild(imageSource);

    articleHeadline.textContent = headline;
    articleByAuthor.textContent = 'By ' + author;
    imageSource.src = img;

    return articleCard
}