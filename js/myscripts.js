const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Welcome to", "आपका स्वागत है", "ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ", "स्वागतम् अस्ति", "میں خوش آمدید", "আদৰণি", "স্বাগতম", "में राउर स्वागत बा", "સ્વાગત", "ಸುಸ್ವಾಗತ", "अपनेक स्वागत अछि", "Kan lo lawm a che", "କୁ ସ୍ଵାଗତ", "ڀليڪار ڪيون ٿا", "வரவேற்கிறோம்", "కు స్వాగతం"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

async function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

async function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

var Alert = document.getElementsByClassName("errorAlert");
var okkButton = document.getElementById("closeButton");
var AlertBox = document.getElementById("alertBox");


for (var i = 0; i < Alert.length; i++) {
  Alert[i].addEventListener("click", function() {
    AlertBox.style.visibility='visible'
  });
}
okkButton.addEventListener('click',()=>{
  AlertBox.style.visibility='hidden'
})

const buttons = document.querySelectorAll('.button');
const popups = document.querySelectorAll('.popup');
const closebtn = document.querySelectorAll('.popup-close');
const popupContainer = document.querySelectorAll('.popup-container');
// const uis = document.getElementsByClassName('ui-dialog')

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  const popup = popups[i];
  const close = closebtn[i];
  // const ui = uis[i]
  button.addEventListener('click', () => {
    popup.classList.add('is-visible');
  });
  close.addEventListener('click', () => {
    popup.classList.remove('is-visible');
  });
  popup.addEventListener('click', (event) => {
    if (popup.classList.contains('is-visible')) {
      if (!popupContainer[i].contains(event.target)) {
        popup.classList.remove('is-visible');
      }
    }
  });
  // ui.addEventListener('click', () => {

  // })
}


const sections = document.querySelectorAll('.animate-me');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
    else {
      entry.target.classList.remove('animated');
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});