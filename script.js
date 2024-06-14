/*function getbooks() {
  document.getElementById('section').innerHTML = "";
  fetch("https://openlibrary.org/search.json?q=" + document.getElementById('query').value)
    .then(a => a.json())
    .then(response => {
      for (var i = 0; i < response.docs.length; i++) {
        document.getElementById("section").innerHTML += "<h2>" + response.docs[i].title + "</h2>" + response.docs[i].author_name[0] + "<br><img src='http://covers.openlibrary.org/b/isbn/" + response.docs[i].isbn[0] + "-M.jpg'><br>";
      }
    });
}
*/
function getBooks() {
  document.getElementById('section').innerHTML = "";
  fetch("https://openlibrary.org/search.json?q=" + document.getElementById('query').value)
    .then(response => response.json())
    .then(data => {
      data.docs.forEach(book => {

        const div_card = document.createElement('div');
        div_card.setAttribute('class', 'card');

        const div_row = document.createElement('div');
        div_row.setAttribute('class', 'row');

        const div_column = document.createElement('div');
        div_column.setAttribute('class', 'column');

        const image = document.createElement('img');
        image.setAttribute('class', 'thumbnail');
        image.setAttribute('id', 'image');

        const title = document.createElement('h3');
        title.setAttribute('id', 'title');

        title.innerHTML = book.title + "<br>" + '<a href="book.html?id=' + book.cover_i + '&title=' + encodeURIComponent(book.title) + '">reviews</a>';

        image.src = `http://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`;

        div_card.appendChild(image);
        div_card.appendChild(title);
        div_column.appendChild(div_card);
        div_row.appendChild(div_column);

        /*document.getElementById("section").innerHTML += "<h2>" + book.title + "</h2>" + "<br><img src='http://covers.openlibrary.org/b/isbn/" + book.isbn[0] + "-M.jpg'><br>" + book.author_name[0];
*/
        document.getElementById('section').appendChild(div_row);


        /* const div_card = document.createElement('div');
         div_card.setAttribute('class', 'card');
 
         const div_row = document.createElement('div');
         div_row.setAttribute('class', 'row');
 
         const div_column = document.createElement('div');
         div_column.setAttribute('class', 'column');
 
         const image = document.createElement('img');
         image.setAttribute('class', 'thumbnail');
         image.setAttribute('id', 'image');
 
         const title = document.createElement('h3');
         title.setAttribute('id', 'title');
 
         //const center = document.createElement('center');
 
         title.innerHTML = `${book.title}`;
         if (book.isbn && book.isbn.length > 0) {
           image.src = `http://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`;
         } else {
           // Provide a default image if ISBN is not available
           image.src = "default-image.jpg";
         }
 
         // center.appendChild(image);
         div_card.appendChild(center);
         div_card.appendChild(title);
         div_column.appendChild(div_card);
         div_row.appendChild(div_column);
         //const main = document.getElementById('main');
         //main.appendChild(div_row);
 */
      });
    });
}

function createCard(book) {



  const div_card = document.createElement('div');
  div_card.setAttribute('class', 'card');



  /*const div_row = document.createElement('div');
  div_row.setAttribute('class', 'row');

  const div_column = document.createElement('div');
  div_column.setAttribute('class', 'column');

  const image = document.createElement('img');
  image.setAttribute('class', 'thumbnail');
  image.setAttribute('id', 'image');

  const title = document.createElement('h3');
  title.setAttribute('id', 'title');

  //const center = document.createElement('center');

  title.innerHTML = `${book.title}`;
  if (book.isbn && book.isbn.length > 0) {
    image.src = `http://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`;
  } else {
    // Provide a default image if ISBN is not available
    image.src = "default-image.jpg";
  }
*/

}
