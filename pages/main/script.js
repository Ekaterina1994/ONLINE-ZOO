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

let pets = [
  {
    image: "../../assets/images/pandas.jpg",
    name: "Giant pandas",
    place: "Native to Southwest China",
    food: "../../assets/icons/icons_diff/icons_mix/banana-bamboo_icon.png",
  },
  {
    image: "../../assets/images/eagles.jpg",
    name: "Eagles",
    place: "Native to South America",
    food: "../../assets/icons/icons_diff/icons_mix/meet-fish_icon.png",
  },
  {
    image: "../../assets/images/gorillas.jpg",
    name: "Gorillas",
    place: "Native to Congo",
    food: "../../assets/icons/icons_diff/icons_mix/banana-bamboo_icon.png",
  },
  {
    image: "../../assets/images/sloth.jpg",
    name: "Two-toed Sloth",
    place: "Mesoamerica, South America",
    food: "../../assets/icons/icons_diff/icons_mix/banana-bamboo_icon.png",
  },
  {
    image: "../../assets/images/cheetahs.jpg",
    name: "Cheetahs",
    place: "Native to Africa",
    food: "../../assets/icons/icons_diff/icons_mix/meet-fish_icon.png",
  },
  {
    image: "../../assets/images/penguins.jpg",
    name: "Penguins",
    place: "Native to Antarctica",
    food: "../../assets/icons/icons_diff/icons_mix/meet-fish_icon.png",
  },
];

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

CAROUSEL.addEventListener("animationend", (animationEvent) => {

  const RANDOM = () => {
    var size = 6,
      arr = [],
      array = [];

    for (var i = 0; i < size; i++) {
      arr.push(i);
    }

    for (var i = 0; i < size; i++) {
      var value = arr.splice(Math.round(Math.random() * (size - i - 1)), 1);
      array.push(value.pop());
    }
    return array;
  };

  let x = RANDOM();

console.log(x[0])

  if (animationEvent.animationName === "to-left") {
    CAROUSEL.classList.remove("transition-left");

    // ARROW_LEFT.addEventListener("click", toLeft);
    // ARROW_RIGHT.addEventListener("click", toRight);

    const leftCards = LEFT_CARD.innerHTML;

    document.getElementById("active-cards").innerHTML = leftCards;

    const card1 = document.createElement("div");
    card1.classList.add("animals__cards-item");
    card1.innerHTML = `<div class="animals__cards-item">
    <div class="animals__card-image">
      <img
        class="animals__card-image-scale"
        src=${pets[x[0]].image}
      />
    </div>
    <div class="animals__card-description">
      <div class="animals__card-text">
        <p class="animals__card-name">${pets[x[0]].name}</p>
        <p class="animals__card-text2">
        ${pets[x[0]].place}
        </p>
      </div>
      <div class="animals__card-food">
        <img
          src=${pets[x[0]].food}
        />
      </div>
    </div>
  </div>`;

    const card2 = document.createElement("div");
    card2.classList.add("animals__cards-item");
    card2.innerHTML = `<div class="animals__cards-item">
    <div class="animals__card-image">
      <img
        class="animals__card-image-scale"
        src=${pets[x[1]].image}
      />
    </div>
    <div class="animals__card-description">
      <div class="animals__card-text">
        <p class="animals__card-name">${pets[x[1]].name}</p>
        <p class="animals__card-text2">
        ${pets[x[1]].place}
        </p>
      </div>
      <div class="animals__card-food">
        <img
          src=${pets[x[1]].food}
        />
      </div>
    </div>
  </div>`;

    const card3 = document.createElement("div");
    card3.classList.add("animals__cards-item");
    card3.innerHTML = `<div class="animals__cards-item">
    <div class="animals__card-image">
      <img
        class="animals__card-image-scale"
        src=${pets[x[2]].image}
      />
    </div>
    <div class="animals__card-description">
      <div class="animals__card-text">
        <p class="animals__card-name">${pets[x[2]].name}</p>
        <p class="animals__card-text2">
        ${pets[x[2]].place}
        </p>
      </div>
      <div class="animals__card-food">
        <img
          src=${pets[x[2]].food}
        />
      </div>
    </div>
  </div>`;

    const card4 = document.createElement("div");
    card4.classList.add("animals__cards-item");
    card4.innerHTML = `<div class="animals__cards-item">
    <div class="animals__card-image">
      <img
        class="animals__card-image-scale"
        src=${pets[x[3]].image}
      />
    </div>
    <div class="animals__card-description">
      <div class="animals__card-text">
        <p class="animals__card-name">${pets[x[3]].name}</p>
        <p class="animals__card-text2">
        ${pets[x[3]].place}
        </p>
      </div>
      <div class="animals__card-food">
        <img
          src=${pets[x[3]].food}
        />
      </div>
    </div>
  </div>`;

    const card5 = document.createElement("div");
    card5.classList.add("animals__cards-item");
    card5.innerHTML = `<div class="animals__cards-item">
    <div class="animals__card-image">
      <img
        class="animals__card-image-scale"
        src=${pets[x[4]].image}
      />
    </div>
    <div class="animals__card-description">
      <div class="animals__card-text">
        <p class="animals__card-name">${pets[x[4]].name}</p>
        <p class="animals__card-text2">
        ${pets[x[4]].place}
        </p>
      </div>
      <div class="animals__card-food">
        <img
          src=${pets[x[4]].food}
        />
      </div>
    </div>
  </div>`;

    const card6 = document.createElement("div");
    card6.classList.add("animals__cards-item");
    card6.innerHTML = `<div class="animals__cards-item">
    <div class="animals__card-image">
      <img
        class="animals__card-image-scale"
        src=${pets[x[5]].image}
      />
    </div>
    <div class="animals__card-description">
      <div class="animals__card-text">
        <p class="animals__card-name">${pets[x[5]].name}</p>
        <p class="animals__card-text2">
        ${pets[x[5]].place}
        </p>
      </div>
      <div class="animals__card-food">
        <img
          src=${pets[x[5]].food}
        />
      </div>
    </div>
  </div>`;

    LEFT_CARD.innerHTML = "";
    LEFT_CARD.appendChild(card1);
    LEFT_CARD.appendChild(card2);
    LEFT_CARD.appendChild(card3);
    LEFT_CARD.appendChild(card4);
    LEFT_CARD.appendChild(card5);
    LEFT_CARD.appendChild(card6);
  } else {
    CAROUSEL.classList.remove("transition-right");

    const rightCards = RIGHT_CARD.innerHTML;

    document.getElementById("active-cards").innerHTML = rightCards;

    const card1 = document.createElement("div");
    card1.classList.add("animals__cards-item");
    card1.innerHTML = `<div class="animals__cards-item">
    <div class="animals__card-image">
      <img
        class="animals__card-image-scale"
        src=${pets[x[0]].image}
      />
    </div>
    <div class="animals__card-description">
      <div class="animals__card-text">
        <p class="animals__card-name">${pets[x[0]].name}</p>
        <p class="animals__card-text2">
        ${pets[x[0]].place}
        </p>
      </div>
      <div class="animals__card-food">
        <img
          src=${pets[x[0]].food}
        />
      </div>
    </div>
  </div>`;

    const card2 = document.createElement("div");
    card2.classList.add("animals__cards-item");
    card2.innerHTML = `<div class="animals__cards-item">
    <div class="animals__card-image">
      <img
        class="animals__card-image-scale"
        src=${pets[x[1]].image}
      />
    </div>
    <div class="animals__card-description">
      <div class="animals__card-text">
        <p class="animals__card-name">${pets[x[1]].name}</p>
        <p class="animals__card-text2">
        ${pets[x[1]].place}
        </p>
      </div>
      <div class="animals__card-food">
        <img
          src=${pets[x[1]].food}
        />
      </div>
    </div>
  </div>`;

    const card3 = document.createElement("div");
    card3.classList.add("animals__cards-item");
    card3.innerHTML = `<div class="animals__cards-item">
    <div class="animals__card-image">
      <img
        class="animals__card-image-scale"
        src=${pets[x[2]].image}
      />
    </div>
    <div class="animals__card-description">
      <div class="animals__card-text">
        <p class="animals__card-name">${pets[x[2]].name}</p>
        <p class="animals__card-text2">
        ${pets[x[2]].place}
        </p>
      </div>
      <div class="animals__card-food">
        <img
          src=${pets[x[2]].food}
        />
      </div>
    </div>
  </div>`;

    const card4 = document.createElement("div");
    card4.classList.add("animals__cards-item");
    card4.innerHTML = `<div class="animals__cards-item">
    <div class="animals__card-image">
      <img
        class="animals__card-image-scale"
        src=${pets[x[3]].image}
      />
    </div>
    <div class="animals__card-description">
      <div class="animals__card-text">
        <p class="animals__card-name">${pets[x[3]].name}</p>
        <p class="animals__card-text2">
        ${pets[x[3]].place}
        </p>
      </div>
      <div class="animals__card-food">
        <img
          src=${pets[x[3]].food}
        />
      </div>
    </div>
  </div>`;

    const card5 = document.createElement("div");
    card5.classList.add("animals__cards-item");
    card5.innerHTML = `<div class="animals__cards-item">
    <div class="animals__card-image">
      <img
        class="animals__card-image-scale"
        src=${pets[x[4]].image}
      />
    </div>
    <div class="animals__card-description">
      <div class="animals__card-text">
        <p class="animals__card-name">${pets[x[4]].name}</p>
        <p class="animals__card-text2">
        ${pets[x[4]].place}
        </p>
      </div>
      <div class="animals__card-food">
        <img
          src=${pets[x[4]].food}
        />
      </div>
    </div>
  </div>`;

    const card6 = document.createElement("div");
    card6.classList.add("animals__cards-item");
    card6.innerHTML = `<div class="animals__cards-item">
    <div class="animals__card-image">
      <img
        class="animals__card-image-scale"
        src=${pets[x[5]].image}
      />
    </div>
    <div class="animals__card-description">
      <div class="animals__card-text">
        <p class="animals__card-name">${pets[x[5]].name}</p>
        <p class="animals__card-text2">
        ${pets[x[5]].place}
        </p>
      </div>
      <div class="animals__card-food">
        <img
          src=${pets[x[5]].food}
        />
      </div>
    </div>
  </div>`;

    RIGHT_CARD.innerHTML = "";
    RIGHT_CARD.appendChild(card1);
    RIGHT_CARD.appendChild(card2);
    RIGHT_CARD.appendChild(card3);
    RIGHT_CARD.appendChild(card4);
    RIGHT_CARD.appendChild(card5);
    RIGHT_CARD.appendChild(card6);

  }

  ARROW_LEFT.addEventListener("click", toLeft);
  ARROW_RIGHT.addEventListener("click", toRight);
});

// Slider (Testimonials)

const LINE = document.getElementById("line");
const SLIDER = document.getElementById("testimonials__cards");
const item = document.getElementById("testimonials__cards-item");
// const itemWidth = item.offsetWidth;

LINE.addEventListener("input", () => {
  console.log(LINE.value);
  let lineValue = LINE.value;

  LINE.setAttribute("max", 8);

  SLIDER.style.transition = "800ms ease transform";
  if (item.offsetWidth == 259) {
    SLIDER.style.transform = `translateX(${-LINE.value * 25}%)`;
  } else {
    SLIDER.style.transform = `translateX(${-LINE.value * 35}%)`;
  }
});

// Pop-up

let popupBg = document.querySelector(".pop-up");
let popup = document.querySelector(".pop-up-body");
let openPopupButtons = document.querySelectorAll(".testimonials__cards-item");
let closePopupButton = document.querySelector(".close-pop-up");

openPopupButtons.forEach((card) => {
  card.addEventListener("click", (e) => {
    e.preventDefault();
    popupBg.classList.add("open");
    popup.classList.add("open");
  });
});

closePopupButton.addEventListener("click", (e) => {
  popupBg.classList.remove("open");
  popup.classList.remove("open");
  e.preventDefault();
});

popupBg.addEventListener("click", (e) => {
  document.querySelector(".pop-up.open").classList.remove("open");
});
