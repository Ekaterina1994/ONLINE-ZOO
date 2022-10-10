// Burger-menu

const iconMenu = document.querySelector(".header__burger");
const menuBody = document.querySelector(".header-wrap");

if (iconMenu) {
  iconMenu.addEventListener("click", () => {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

menuBody.addEventListener("click", () => {
  if (iconMenu.classList.contains("_active")) {
    document.body.classList.remove("_lock");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
  }
});

// Carousel

const ARROW_LEFT = document.getElementById("arrow-left");
const ARROW_RIGHT = document.getElementById("arrow-right");
const CAROUSEL = document.getElementById("carousel");
const LEFT_CARD = document.getElementById("left-cards");
const RIGHT_CARD = document.getElementById("right-cards");

const toLeft = () => {
  CAROUSEL.classList.add("transition-left");
  ARROW_LEFT.removeEventListener("click", toLeft);
  ARROW_RIGHT.removeEventListener("click", toRight);
};

const toRight = () => {
  CAROUSEL.classList.add("transition-right");
  ARROW_LEFT.removeEventListener("click", toLeft);
  ARROW_RIGHT.removeEventListener("click", toRight);
};

ARROW_LEFT.addEventListener("click", toLeft);
ARROW_RIGHT.addEventListener("click", toRight);

const RANDOM_NUMBER = () => Math.round(Math.random() * 5) + 1;

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  if (animationEvent.animationName === "to-left") {
    CAROUSEL.classList.remove("transition-left");

    // ARROW_LEFT.addEventListener("click", toLeft);
    // ARROW_RIGHT.addEventListener("click", toRight);

    const leftCards = LEFT_CARD.innerHTML;

    document.getElementById("active-cards").innerHTML = leftCards;

    // const firstCard = document.getElementById(
    //   "random" + Math.round(Math.random() * 5) + 1
    // ).innerHTML;
    // let secondCard = document.getElementById(
    //   "random" + `${RANDOM_NUMBER()}`
    // ).innerHTML;
    // let thirdCard = document.getElementById(
    //   "random" + `${RANDOM_NUMBER()}`
    // ).innerHTML;
    // let fourthCard = document.getElementById(
    //   "random" + `${RANDOM_NUMBER()}`
    // ).innerHTML;
    // let fifthCard = document.getElementById(
    //   "random" + `${RANDOM_NUMBER()}`
    // ).innerHTML;
    // let sixthCard = document.getElementById(
    //   "random" + `${RANDOM_NUMBER()}`
    // ).innerHTML;

    document.getElementById("active-cards").innerHTML = leftCards;
    // document.getElementById("random1").innerHTML = firstCard;
    // document.getElementById("random2").innerHTML = secondCard;
    // document.getElementById("random3").innerHTML = thirdCard;
    // document.getElementById("random4").innerHTML = fourthCard;
    // document.getElementById("random5").innerHTML = fifthCard;
    // document.getElementById("random6").innerHTML = sixthCard;

    const card1 = document.createElement("div");
    card1.classList.add("animals__cards-item");
    // let firstCard = document.getElementById("random" + `${RANDOM_NUMBER()}`).innerHTML;
    card1.innerHTML = Math.round(Math.random() * 5) + 1;

    // const card2 = document.createElement("div");
    // card2.classList.add("animals__cards-item");
    // card2.innerHTML = secondCard;

    // const card3 = document.createElement("div");
    // card3.classList.add("animals__cards-item");
    // card3.innerHTML = thirdCard;

    // const card4 = document.createElement("div");
    // card4.classList.add("animals__cards-item");
    // card4.innerHTML = fourthCard;

    // const card5 = document.createElement("div");
    // card5.classList.add("animals__cards-item");
    // card5.innerHTML = fifthCard;

    // const card6 = document.createElement("div");
    // card6.classList.add("animals__cards-item");
    // card6.innerHTML = sixthCard;

    LEFT_CARD.innerHTML = "";
    LEFT_CARD.appendChild(card1);
    // LEFT_CARD.appendChild(card2);
    // LEFT_CARD.appendChild(card3);
    // LEFT_CARD.appendChild(card4);
    // LEFT_CARD.appendChild(card5);
    // LEFT_CARD.appendChild(card6);
  } else {
    CAROUSEL.classList.remove("transition-right");
  }

  ARROW_LEFT.addEventListener("click", toLeft);
  ARROW_RIGHT.addEventListener("click", toRight);
});

// Slider (Testimonials)

const LINE = document.getElementById("line");
const SLIDER = document.getElementById("testimonials__cards");
const item = document.getElementById("testimonials__cards-item");
// const itemWidth = item.offsetWidth;

LINE.addEventListener(
  "input",
  () => {
    console.log(LINE.value);
    let lineValue = LINE.value;

    LINE.setAttribute("max", 8);

    SLIDER.style.transition = "800ms ease transform";
    if (item.offsetWidth == 259) {
      SLIDER.style.transform = `translateX(${-LINE.value * 25}%)`;
    } else {
      SLIDER.style.transform = `translateX(${-LINE.value * 35}%)`;
    }
  }
);


// Pop-up

// const popUpItems = document.querySelector(".testimonials__cards-item");
// const body = document.querySelector("body");
// const lockPad = document.querySelectorAll(".lock-pad");

// let unlock = true;

// const time = 1000;

// if (popUpItems.length > 0) {
//   for (let i = 0; i < popUpItems.length; i++) {
//     const popUpItem = popUpItems[i];
//     popUpItem.addEventListener("click", () =>
//     {
//       const popUpName = popUpItem.getAttribute
//     })
//   }
// }

// const popUpCloseItem = document.querySelectorAll(".close-pop-up");

// if (popUpCloseItem.length > 0) {
//   for (let i = 0; i < popUpCloseItem.length; i++) {
//     const el = popUpCloseItem[i];
//     el.addEventListener("click", () =>
//     {
//       popUpClose(el.closest(".pop-up"));
//     })
//   }
// }

// const popUpClose = () =>
// {
  
// }