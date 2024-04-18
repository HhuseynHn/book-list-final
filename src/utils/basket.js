/** @format */

import { books } from "../mook/book-list-data.js";

//-------------------------- Add Basket

let cardBasket = {
  data: [],
  total: 0,
  countCover: 0,
};

export function updateData() {
  let cardTotal = 0;
  let showCount = 0;
  if (cardBasket.data.length) {
    cardTotal = cardBasket.data.map((e) => e.amount).reduce((a, b) => a + b);
    showCount = cardBasket.data
      .map((e) => e.countInner)
      .reduce((a, b) => a + b);
  } else {
    cardTotal = 0;
    showCount = 0;
  }
  cardBasket.total = parseInt(cardTotal);
  basketTotal.innerHTML = cardBasket.total;
  basketCount.innerHTML = showCount;
}
let basketTotal = document.querySelector(".basket-total");
let basketCount = document.querySelector(".basket-num");
export function addbascet() {
  let addToCard = document.querySelectorAll(".add-to-cart");

  addToCard.forEach((e) => {
    e.addEventListener("click", () => {
      console.log("Add");
      let count = Number(basketCount.innerHTML) + 1;
      let getDataId = e.getAttribute("data-id");
      let cardImage = books.find((e) => {
        return e.id == getDataId;
      }).image;
      let cardPrice = books.find((e) => {
        return e.id == getDataId;
      }).price;
      basketCount.innerHTML = count;
      let idControl = cardBasket.data.map((e) => Number(e.id));
      if (!idControl.includes(Number(getDataId))) {
        cardBasket.data.push({
          id: getDataId,
          countInner: 1,
          img: cardImage,
          priceCard: cardPrice,
          amount: cardPrice * 1,
        });
      } else {
        let findData = cardBasket.data.find((e) => e.id == getDataId);
        findData.countInner += 1;

        findData.amount = findData.countInner * cardPrice;
      }

      basketRender();
      removeBascet();
      updateData();
    });
  });
}

//--------------------------------
// ------ Basket show togle ------------
export function basketShow() {
  let basket = document.querySelector(".fa-basket-shopping");
  let basketContainer = document.querySelector(".basket-container");
  basket.addEventListener("click", () => {
    basketContainer.classList.toggle("visible");
  });
}
//---------------------------------

//-------------- Basket details -----------

export function basketRender() {
  let basketContent = document.querySelector(".basket-content-li");
  let cardBascetAry = cardBasket.data.map((e) => {
    return `
    <li>
              <img src="${e.img}" alt="" />
              <span>${e.countInner}</span>
              <span>${e.priceCard}$</span>
              <button class="basket-button" data-id=${e.id}>x</button>
            </li>
            `;

    //  NOTE Add data -id to basket LI
  });
  basketContent.innerHTML = cardBascetAry.join("");
}
//---------------------------------

//------------- Remove basket -----

export function removeBascet() {
  let basketButton = document.querySelectorAll(".basket-button");

  basketButton.forEach((elmmn) => {
    elmmn.addEventListener("click", () => {
      //---------------Get ID---------------
      let getId = elmmn.getAttribute("data-id");
      //----------------------------------

      //--------- Index element of array
      let getIndx = cardBasket.data.findIndex(
        (e) => Number(getId) == Number(e.id)
      );
      //-----------------------------
      //--------------Get count-----
      let countIndex = cardBasket.data.find((el) => el.id == getId).countInner;
      //-------------------------------
      let countDataIndx = cardBasket.data[getIndx].countInner;
      if (countIndex == 1) {
        cardBasket.data.splice(getIndx, 1);
      } else {
        cardBasket.data[getIndx].countInner = countDataIndx - 1;
        cardBasket.data[getIndx].amount =
          cardBasket.data[getIndx].countInner *
          cardBasket.data[getIndx].priceCard;
      }

      basketRender();
      removeBascet();
      updateData();
    });
  });
}
//---------------------------------

//----------- when you are filtir category, basket add can't work
