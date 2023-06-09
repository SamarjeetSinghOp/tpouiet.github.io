let slideIndex = 0;
showSlides();

async function nextSlide() {
  slideIndex++;
  showSlides();
  timer = _timer;
}

async function prevSlide() {
  slideIndex--;
  showSlides();
  timer = _timer;
}

async function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  timer = _timer;
}

async function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dots");

  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  
  slides[slideIndex].style.display = "block";
  
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  
  dots[slideIndex].classList.add("active");
}

let timer = 7;
const _timer = timer;

setInterval(() => {
  timer--;

  if (timer < 1) {
    nextSlide();
    timer = _timer;
  }
}, 1000); 