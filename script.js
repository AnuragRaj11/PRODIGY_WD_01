const hamb = document.querySelector(".hamb");
const navList = document.querySelector(".fixed-nav");

hamb.addEventListener("click", function() {
	navList.classList.toggle("active");
	hamb.classList.toggle("click");
})