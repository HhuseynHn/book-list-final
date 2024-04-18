/** @format */
import { books } from "../mook/book-list-data.js";
let bookContentDetail = document.querySelector(".content-img-container");

let hashId = window.location.hash;

hashId = hashId.split("#")[1];
let { bookName, authorName, genre, language, price, image } = books.find(
  (e) => e.id == hashId
);

bookContentDetail.innerHTML = `
<div class="book-detals-main">
            <div class="book-detals">
              <h4>Book name:------${bookName}</h4>
              <span></span>
            </div>

            <div class="book-detals">
              <h4>Autor name:------${authorName}:</h4>
              <span></span>
            </div>

            <div class="book-detals">
              <h4>Genre:------${genre}</h4>
              <span></span>
            </div>

            <div class="book-detals">
              <h4>Language:------${language}</h4>
              <span></span>
            </div>

            <div class="book-detals">
              <h4>Price:------${price}</h4>
              <span></span>
            </div>
          </div>

          <div class="image-book">
           <img src="${image}" alt="">
          </div>
`;
