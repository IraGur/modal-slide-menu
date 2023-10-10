/*--MENU--*/

const navigation = document.querySelector(".navigation");
const icon = document.getElementById("icon");
const icon1 = document.getElementById("a");
const icon2 = document.getElementById("b");
const icon3 = document.getElementById("c");

icon.addEventListener("click", () => {
   icon1.classList.toggle("a");
   icon2.classList.toggle("c");
   icon3.classList.toggle("b");
   navigation.classList.toggle("active");
});

/*--MODAL--*/

const openButton = document.querySelector(".btn-open");
const closeButton = document.querySelector(".btn-close");
const overlay = document.querySelector(".overlay");

openButton.addEventListener("click", () => {
   overlay.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
   overlay.classList.add("hidden");
});
