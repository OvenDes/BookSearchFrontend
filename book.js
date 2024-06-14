const APILINK = 'https://eba51b63-3402-42e0-9377-3f166def984b-00-3cw5b2e19w0gg.spock.replit.dev/api/v1/reviews/'
const url = new URL(location.href)
const bookId = url.searchParams.get('id')
const booktitle = url.searchParams.get('title')



const main = document.getElementById("section");
const title = document.getElementById("title")
//const id = document.getElemenById("smalltitle")


title.innerText = booktitle;
//id.innerText = bookId;

const new_card = document.createElement('div');
new_card.innerHTML = ` <div class="row">
         <div class="column">
            <div class="card1">
            New Review: 
            <p> User: <input type= "text" id="new_user" placeholder="" ></p>
            <p> Review: <input type= "text" id="new_review" placeholder="" ></p>
           
            <p> <a href="#" onclick="saveReview('new_review', new_user)"> Save </a> </p>
           
              </div>
         </div>
       </div>
      `

main.appendChild(new_card)

returnReviews(APILINK)

function returnReviews(url1) {
  fetch(url1 + "book/" + bookId).then(res => res.json())

    .then(function(data) {
      console.log(data);
      data.forEach(review => {
        const div_card = document.createElement('div');
        // div_card.classList.add('card1');

        div_card.innerHTML = `
       <div class="row">
         <div class="column">
            <div class="card1" id="${review._id}">
            <p class="username"> User: ${review.User}</p>
           <p class="rev"> Review: ${review.Review}</p>
           
           <p class= "next"><a class="edit", href= "#" onclick= "editReview('${review._id}', '${review.Review}','${review.User}')"> Edit </a> <br> <a class="delete", href= "#" onclick= "deleteReview('${review._id}', '${review.Review}','${review.User}')"> Delete </a> </p>
              </div>
         </div>
       </div>
        `
        main.appendChild(div_card);
      });
    });
}

function editReview(id, review, user) {
  const element = document.getElementById(id);
  const newReviewid = "review" + id
  const userid = "user" + id

  element.innerHTML = `
   <p> User: 
    <input type="text" id="${userid}" value= "${user}" ><br><br>
    </p>
  <p > Review: 
  <input type="text" id="${newReviewid}" value="${review}"><br><br>
  </p>
  <p> <a href="#" onclick="saveReview( '${newReviewid}', '${userid}','${id}')"> Save </a> </p>
  `
}

function saveReview(newReviewid, userid, id) {
  const review3 = document.getElementById(newReviewid).value;
  const user3 = document.getElementById(userid).value;
  console.log(review3);
  fetch(APILINK + id, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "user": user3, "review": review3 })
  }).then(res => res.json())
    .then(res => {
      console.log(res)
      location.reload(); //reload website

    });

}


function deleteReview(id, review, user) {
  const element = document.getElementById(id);
  element.innerHTML = ``

  fetch(APILINK + id, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },

  }).then(res => res.json())
    .then(res => {
      console.log(res)
      location.reload(); //reload website
    });
}
