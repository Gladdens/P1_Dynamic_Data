/* We start by loading and parsing our JSON data, with fetch.
Read about fetch here: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch */
const options = {method: 'GET', headers: {'User-Agent': 'insomnia/10.0.0'}};

fetch('https://newsapi.org/v2/everything?q=cats%20-trump%20-dogs%20-dog&sortBy=relevancy&searchin=title&pageSize=10&apiKey=e764136da80e4453b9ed5623bee8aee9', options)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Log the response to ensure it is as expected

    if (data.articles && data.articles.length > 0) {
      // Creating an H1 element and setting its inner HTML to the title of the first article
      let title = document.createElement('h1');
      title.innerHTML = data.articles[0].title; // Accessing the first article's title
      document.body.appendChild(title); // Appending the title to the body of the document
    } else {
      console.error('No articles found in the response.');
    }
  })
  .catch(err => console.error('Fetch error:', err));


// fetch('https://newsapi.org/v2/everything?q=cats%20-trump%20-dogs%20-dog&sortBy=relevancy&searchin=title&pageSize=10&apiKey=83f9310a28e54d2787cfd758659852b5')
// .then(data => data.json() )  /* on this line we parse the file as JSON */
// .then(json => { 

//   console.log(json)

  // JavaScript can select elements on the page and store them in variables
  // Let's make a variable to hold the body element
  // see also: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
  // let body = document.querySelector('body')

  // Javascript can create new elements to add to the page.
  // Let's add a logo dynamically, using the image src specified in our JSON data
  // let logo = document.createElement('img')
  // logo.src = json.logo
  // logo.classList.add('logo')  /* here Javascript adds the 'logo' css class   */
  // body.appendChild(logo)  /* here we are adding the newly created heading to the page */
  
  // Now let's embed a title in our page dynamically 
  // Here we create an h1 element and put JSON  data inside.
  // let title = document.createElement('h1')
  // title.innerHTML = json.title
  // body.appendChild(title)  /* here we are adding the newly created heading to the page */

  // // get a description from the JSON data and add it to the page 
  // let description = document.createElement('p')
  // description.innerHTML = json.description
  // body.appendChild(description)

  // // let's make a shoe section on the page to hold all the shoes.
  // let section = document.createElement('section')
  // body.appendChild(section)

  // // "forEach" lets us iterate over each shoe in our JSON data .
  // // for each shoe, we build a template and add it to the page. 
  // json.shoes.forEach( shoe => {
    
  //   // Let's create a div to contain the shoe
  //   let div = document.createElement('div')
  //   // add a CSS class "shoe" to each div
  //   div.classList.add('shoe')
  //   // set the CSS background based on our JSON data
  //   div.style.background = shoe.background
    
  //   // The template string below uses `backticks` instead of "quotes".
  //   // This allows us to embed variables inside the string
  //   // This is known as a "template literal"
  //   // see also: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals 
  //   let template = 
  //     `<h4>${shoe.name}</h4>
  //     <hr/>
  //     <p>${shoe.description}</p>`

  //   // place the template inside the shoe div
  //   div.innerHTML = template
  //   // add the  template to the shoe section
  //   document.querySelector('section').appendChild(div)
  // })

  // let footer = document.createElement('footer')
  // footer.innerHTML = json.footer
  // body.appendChild(footer)
  


