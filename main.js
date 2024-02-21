'use strict';


const addEventOnElem = function (elem, type, callback){
    if (elem.length > 1){
        for (let i = 0; i < elem.length;i++){
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type ,callback);
    }
}


const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = () => navbar.classList.toggle("active");

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = () => navbar.classList.remove("active");

addEventOnElem(navLinks, "click", closeNavbar);




const header = document.querySelector("[data-header]");

const headerActive = function (){
    if(window.scrollY > 100) {
        header.classList.add("active");
    }else {
        header.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", headerActive);


// const navbar = document.querySelector("[data-navbar]");
// const navToggle = document.querySelector("[data-nav-toggler]");
// const navLinks = document.querySelectorAll("[data-nav-link]");
// const header = document.querySelector("[data-header]");

// const toggleNavbar = () => navbar.classList.toggle("active");
// const closeNavbar = () => navbar.classList.remove("active");

// navToggle.addEventListener("click", toggleNavbar);

// navLinks.forEach((link) => {
//   link.addEventListener("click", closeNavbar);
// });

// function headerActive() {
//   if (window.scrollY > 100) {
//     header.classList.add("active");
//   } else {
//     header.classList.remove("active");
//   }
// }

// headerActive(); // Inicializace funkce při načítání stránky
// window.addEventListener("scroll", headerActive);



const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
  lastClickedFilterBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedFilterBtn = this;

  for (let i = 0; i < filterItems.length; i++) {
    if (this.dataset.filterBtn === filterItems[i].dataset.filter ||
      this.dataset.filterBtn === "all") {

      filterItems[i].style.display = "block";
      filterItems[i].classList.add("active");

    } else {

      filterItems[i].style.display = "none";
      filterItems[i].classList.remove("active");

    }
  }
}

addEventOnElem(filterBtns, "click", filter);



// swiper gallery

// var swiper = new Swiper('.mySwiper', {
//   slidesPerView: 1,
//   spaceBetween: 20,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//       599: {
//           slidesPerView: 2,
//           spaceBetween:40
//       },
//       1023: {
//           slidesPerView:3,
//           spaceBetween:60
//       }
//   }

// });
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
  });
});

//  text rozbliti //
const textButtons = document.querySelectorAll(`.contact__btn`);
textButtons.forEach(textButtons => {
    let text = textButtons.querySelector(`p`);
    

    text.innerHTML = text.innerText.split("").map(
        (char, i) => `<span style ="transform:rotate(${i * 13}deg)">${char }</span>`
    ).join("");
});