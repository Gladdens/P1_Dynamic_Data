/* We start by loading and parsing our JSON data, with fetch.
Read about fetch here: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch */
const options = {method: 'GET', headers: {'User-Agent': 'insomnia/10.0.0'}};

fetch('https://newsapi.org/v2/everything?q=cats%20-trump%20-dogs%20-dog&sortBy=relevancy&searchin=title&pageSize=10&apiKey=e764136da80e4453b9ed5623bee8aee9', options)

  .then(response => response.json())
  .then(data => {
    console.log(data); // Log the response for debugging

    if (data.articles && data.articles.length > 0) {
      const container = document.getElementById('container');

      for (const article of data.articles) {
        // No need to create new divs, reuse existing structure
        const articleDiv = container.querySelector('.cat-holder'); // Get the existing .cat-holder div
        
        // Check if publishedAt exists, update existing element
        const publishDate = container.querySelector('.date');
        if (article.publishedAt && publishDate) {
          publishDate.textContent = `Published: ${article.publishedAt}`;
        }

        // Update the existing title element
        const title = container.querySelector('.title');
        title.textContent = article.title;

        // Check if description exists, update existing element
        const description = container.querySelector('.description');
        if (article.description && description) {
          description.textContent = article.description;
        }

        // Check if urlToImage exists, update existing image src
        const image = container.querySelector('.cat'); // Get the existing .cat image
        if (article.urlToImage && image) {
          image.src = article.urlToImage;
        }
      }
    } else {
      console.error('No articles found in the response.');
    }
  })
  .catch(err => console.error('Fetch error:', err));

// .then(response => response.json())
//   .then(data => {
//     console.log(data); // Log the response to ensure it is as expected

//     // if (data.articles && data.articles.length > 0) {
//     //   // Creating an H1 element and setting its inner HTML to the title of the first article
//     //   let title = document.createElement('h1');
//     //   title.innerHTML = data.articles[0].title; // Accessing the first article's title
//     //   document.body.appendChild(title); // Appending the title to the body of the document
//     // } else {
//     //   console.error('No articles found in the response.');
//     // }

//     if (data.articles && data.articles.length > 0) {
//       const container = document.getElementById('container');
//       for (const article of data.articles) {
//         // Create a div for each article
//         const articleDiv = document.createElement('div');
//         articleDiv.classList.add('article'); // Add a class for styling

//         // Check if publishedAt exists and create a p element for it
//         if (article.publishedAt) {
//           const publishedAt = document.createElement('p');
//           publishedAt.innerHTML = `Published: ${article.publishedAt}`;
//           articleDiv.appendChild(publishedAt);
//         }

//         // Create an H2 element with the title
//         const title = document.createElement('h2');
//         title.innerHTML = article.title;
//         articleDiv.appendChild(title);

//         // Check if description exists and create a p element for it
//         if (article.description) {
//           const description = document.createElement('p');
//           description.innerHTML = article.description;
//           articleDiv.appendChild(description);
//         }

  

//         // Check if urlToImage exists and create an img element for it
//         if (article.urlToImage) {
//           const image = document.createElement('img');
//           image.src = article.urlToImage;
//           articleDiv.appendChild(image);
//         }

//         // Append the article div to the body
//         document.body.appendChild(articleDiv);
//         container.appendChild(articleDiv);
//       }
//     } else {
//       console.error('No articles found in the response.');
//     }
//   })
//   .catch(err => console.error('Fetch error:', err));

  