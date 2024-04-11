/** @format */

import { books } from "../mook/book-list-data.js";
import { unicCategoryList } from "../utils/unicList.js";

let render = (data) => {
  let bookList = document.querySelector(".book-list");
  bookList.innerHTML = data.map((elemnt) => {
    return `
<li class="book-card-container">
            <div class="book-card">
              <img class="book-img" data-id="${elemnt.id}" src="${elemnt.image}" alt="${elemnt.bookName}" />
              <p class="book-name">${elemnt.bookName}</p>
              <p class="author-name">${elemnt.authorName}</p>
              <p class="price">${elemnt.price}$</p>
              <p class="add-to-cart">Add to Card</p>
            </div>
          </li>

`;
  });

  let bookImg = document.querySelectorAll(".book-img");

  bookImg.forEach((e) => {
    e.addEventListener("click", () => {
      window.location.href = "./page/bookDetals.html";
    });
  });
};

render(books);

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
  } else {
    const filterGenre = books.filter((e) => {
      return e.genre == categotyList.value;
    });

    render(filterGenre)
  }
});
