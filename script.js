let inputDate;
let outputDate;

function formatDate(iso) {
  const date = new Date(iso);
  
  // Options to format the date
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// Fetching the articles data
const options = { method: 'GET', headers: { 'User-Agent': 'insomnia/10.0.0' } };

fetch('https://newsapi.org/v2/everything?q=cats%20-trump%20-dogs%20-dog%20-eating&sortBy=relevancy&searchin=title&pageSize=20&apiKey=e764136da80e4453b9ed5623bee8aee9', options)
.then(response => response.json())
.then(data => {
  console.log(data); // Log the response for debugging

  if (data.articles && data.articles.length > 0) {
    const container = document.getElementById('container');

    // Filter articles with valid images
    const validArticles = data.articles.filter(article => article.urlToImage);

    // Loop through up to 10 valid articles
    validArticles.slice(0, 10).forEach(article => {
      // Create an <a> tag for the article link
      const articleLink = document.createElement('a');
      articleLink.href = article.url; // Set the URL of the article
      articleLink.target = '_blank'; // Open in a new tab

      // Create a new wrapper div for each article
      const articleContainer = document.createElement('div');
      articleContainer.classList.add('article-container'); // Add a class for styling

      // Create cat-holder div
      const catHolderDiv = document.createElement('div');
      catHolderDiv.classList.add('cat-holder');

      // Create img element for the cat image
      const catImage = document.createElement('img');
      catImage.classList.add('cat');
      catImage.src = article.urlToImage; // Use the article image
      catHolderDiv.appendChild(catImage);

      // Create info-box div
      const infoBoxDiv = document.createElement('div');
      infoBoxDiv.classList.add('info-box');

      // Create info div
      const infoDiv = document.createElement('div');
      infoDiv.classList.add('info');

      // Create and add the date
      const publishDate = document.createElement('p');
      publishDate.classList.add('date');
      if (article.publishedAt) {
        const formattedDate = formatDate(article.publishedAt);
        publishDate.textContent = `Published: ${formattedDate}`;
      }
      infoDiv.appendChild(publishDate);

      // Create and add the title
      const title = document.createElement('h2');
      title.classList.add('title');
      title.textContent = article.title;
      infoDiv.appendChild(title);

      // Create and add the description
      const description = document.createElement('p');
      description.classList.add('description');
      description.textContent = article.description || 'No description available';
      infoDiv.appendChild(description);

      // Append info div to info-box
      infoBoxDiv.appendChild(infoDiv);

      // Create paper div
      const paperDiv = document.createElement('div');
      paperDiv.classList.add('paper');

      // Create img element for the paper image
const paperImage = document.createElement('img');

      // Randomize between paper1.png and paper2.png
      const randomPaperImage = Math.random() < 0.5 ? 'image/paper1.png' : 'image/paper2.png';
      paperImage.src = randomPaperImage; // Set the randomly chosen image

      // const paperImage = document.createElement('img');
      // paperImage.src = 'image/paper1.png'; // Use the existing paper image
      paperDiv.appendChild(paperImage);

      // Append paper div to info-box
      infoBoxDiv.appendChild(paperDiv);

      // Append cat-holder and info-box to the articleContainer div
      articleContainer.appendChild(catHolderDiv);
      articleContainer.appendChild(infoBoxDiv);

      // Append the articleContainer to the articleLink
      articleLink.appendChild(articleContainer);

      // Append the articleLink to the main container
      container.appendChild(articleLink);
    });
  } else {
    console.error('No articles found in the response.');
  }
})
.catch(err => console.error('Fetch error:', err));