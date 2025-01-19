const container = document.querySelector(".conainer");
const thcontainer = document.querySelector(".thank-container");
const rate = document.querySelector("#rate");
let rating = 0;
const nums = document.querySelectorAll(".num");
const btn = document.querySelector(".sub-btn");
nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    const active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    e.target.classList.add("active");
    // rating = document.createTextNode(e.target.getAttribute("data-value"));
    rating = e.target.getAttribute("data-value");

    console.log(rating);
  });
});
btn.addEventListener("click", (e) => {
  container.classList.add("hidden");
  thcontainer.classList.remove("hidden");
  rate.innerHTML = rating;
});
