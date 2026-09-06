"use strict ";

const getHeader = document.querySelector("#header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    getHeader.classList.add("scrolled");
  } else {
    getHeader.classList.remove("scrolled");
  }
});

const coffeeData = [
  {
    type: "Black Coffee",
    title: "TIME DISCOVER <br /> COFFEE MOUSSE",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequuntur voluptate in vel a aspernatur id molestias ducimus, sint qui.",
    img: "imgs/coffee-home.png",
  },
  {
    type: "Iced Caramel",
    title: "REFRESHING <br /> ICED COFFEE",
    desc: "Enjoy the perfect blend of espresso, milk, and sweet caramel syrup over ice. Perfect for hot days.",
    img: "imgs/menu-2.png",
  },
  {
    type: "Espresso Shot",
    title: "PURE ENERGY <br /> ESPRESSO",
    desc: "A concentrated form of coffee served in small, strong shots. Get your morning kickstart.",
    img: "imgs/menu-1.png",
  },
];

const coffeeType = document.getElementById("coffee-type");
const coffeeTitle = document.getElementById("coffee-title");
const coffeeDesc = document.getElementById("coffee-desc");
const coffeeImg = document.getElementById("coffee-img");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

nextBtn.addEventListener("click", function () {
  currentIndex++;

  if (currentIndex === coffeeData.length) {
    currentIndex = 0;
  }

  coffeeType.textContent = coffeeData[currentIndex].type;

  coffeeTitle.innerHTML = coffeeData[currentIndex].title;

  coffeeDesc.textContent = coffeeData[currentIndex].desc;
  coffeeImg.src = coffeeData[currentIndex].img;
});
