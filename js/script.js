let slideIndex = 0;
showSlides(slideIndex);

// Function to control slide navigation
function slide(n) {
  showSlides(slideIndex += n);
}

// Display the current slide
function showSlides(n) {
  let slides = document.querySelectorAll('.pricing-card');
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  
  // Hide all slides and display the active one
  slides.forEach((slide, index) => {
    slide.style.display = 'none';
  });
  slides[slideIndex].style.display = 'block';
}

// Function to toggle more info sections
function toggleInfo(planId) {
  const infoSection = document.getElementById(`${planId}-info`);
  if (infoSection.style.display === 'none') {
    infoSection.style.display = 'block';
  } else {
    infoSection.style.display = 'none';
  }
}
