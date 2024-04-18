/** @format */

import { books } from "../mook/book-list-data.js";
import { unicCategoryList } from "../utils/unicList.js";
import {
  addbascet,
  basketRender,
  basketShow,
  removeBascet,
  updateData,
} from "../utils/basket.js";

//----------------Book list------------
let render = (data) => {
  let bookList = document.querySelector(".book-list");
  let bookListAry = data.map((elemnt) => {
    return `
<li class="book-card-container">
            <div class="book-card">
              <img class="book-img" data-id="${elemnt.id}" src="${elemnt.image}" alt="${elemnt.bookName}" />
              <p class="book-name">${elemnt.bookName}</p>
              <p class="author-name">${elemnt.authorName}</p>
              <p class="price">${elemnt.price}$</p>
              <p class="add-to-cart" data-id="${elemnt.id}">Add to Card</p>
            </div>
          </li>

`;
  });

  bookList.innerHTML = bookListAry.join("");
  let bookImg = document.querySelectorAll(".book-img");

  //---------------Add to card -------------
  bookImg.forEach((e) => {
    e.addEventListener("click", () => {
      let getId = e.getAttribute("data-id");

      window.location.href = `./page/bookDetals.html#${getId}`;
    });
  });
  //--------------------------------
};
//-------------------------------------
render(books);

//-----------------Category list filtir--------------------
let categotyList = document.querySelector("#caregory-list");
let unicList = unicCategoryList(books);

categotyList.innerHTML += unicList.map((e) => {
  return `

  <option value="${e}" select>${e}</option>
  `;
});
categotyList.addEventListener("change", () => {
  if (categotyList.value == "All") {
    render(books);
    addbascet();
  } else {
    const filterGenre = books.filter((e) => {
      return e.genre == categotyList.value;
    });
    render(filterGenre);
    addbascet();
  }
});
//---------------------------------------------------------
addbascet();
basketShow();
basketRender();
removeBascet();
updateData();
