//Js
document.querySelector(".mobile-btn").addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("active");
});

function slide(direction) {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const cardWidth = document.querySelector(".pricing-card").offsetWidth;
  sliderWrapper.scrollBy({
    left: direction * (cardWidth + 16), // Adjust as needed for spacing between cards
    behavior: 'smooth'
  });
}