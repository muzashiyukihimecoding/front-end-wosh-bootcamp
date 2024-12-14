// Dark Mode Display
const darkMode = document.querySelector("body");
function turnDarkMode() {
   darkMode.style.backgroundColor = "#232321";
}

// Main Catalogue Image Changer Function
const imgCatalogue = document.querySelector(".main-catalogue");
function imgCatChange1() {
   imgCatalogue.style.backgroundImage = "url(assets/brown-kicks-2.png)";
}
function imgCatChange2() {
   imgCatalogue.style.backgroundImage = "url(assets/brown-kicks-3.png)";
}

// Text Color When Dark Mode
// const textColorDarkMode = document.querySelector(
//    "huge-font",
//    "top-product-text"
// );

// function turnDarkMode() {
//    textColorDarkMode.style.color = "white";
// }
