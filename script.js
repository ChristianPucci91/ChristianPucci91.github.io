var position = 'earth';
var dialogBox = document.getElementById('dialog-box');
var ufo = document.getElementById('ufo');
dialogBox.innerHTML = 'I\'m from Jupiter, help me get home! Click me!';

document.getElementById("ufo").addEventListener("click", function() {
  if(position === 'earth'){
    var elementPosition = document.getElementById("moon").offsetTop;
    position = 'moon';
    dialogBox.innerHTML = 'Thank you! The next step is Mars, give me another push!';
    ufo.style.top = '2500px';
  }else if(position === 'moon'){
    var elementPosition = document.getElementById("mars").offsetTop;
    position = 'mars';
    dialogBox.innerHTML = 'Hurray! I\'m almost there! Heeelp';
    ufo.style.top = '5000px';
  }else if (position === 'mars'){
    var elementPosition = document.getElementById("jupiter").offsetTop;
    position = 'jupiter';
    dialogBox.innerHTML = 'Finally home! thanks for helping me! It\'s nice to know <strong><em>you\'re not alone!</em></strong> 😄';
    ufo.style.top = '7500px';
  }else{
    var elementPosition = document.getElementById("earth").offsetTop;
    if (isMobileWidth()) {
        ufo.style.top = '60%';
    } else {
        ufo.style.top = '50%';
    }
    position = 'earth';
    dialogBox.innerHTML = 'I\'m from Jupiter, help me get home! Click me!';

  }
  // Sottrai 100px dalla posizione per il margine superiore
  if (isMobileWidth()) {
    var targetPosition = elementPosition - 700;
  } else {
    var targetPosition = elementPosition - 250;
  }
  // Sposta l'ufo alla stessa posizione dello scrollTo
  // Esegui lo scorrimento con margine superiore corretto
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
  
});



//type anything here
const text = "Welcome to my Universe";


const fadeSlider = document.getElementById("fade");
const flickerDuration = document.getElementById("flicker-duration");


const container = document.getElementById("container");
function createP(text) {
    for(let i=0; i< text.length; i++) {
        const p = document.createElement("p");
        p.classList.add("flicker");
        container.appendChild(p);
        p.innerHTML = text[i];
    }
}
createP(text);


let temp = 0;
const myInterval = setInterval(() => {
    
    const p = document.getElementsByClassName("flicker");
    // const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    const randomNumber = Math.floor(Math.random() * (p.length));
    
    for(let i = 0; i<p.length; i++) {
        p[i].style.transitionDuration = 0.3 + "s";
    }

    temp = temp + 1;

    if(!p[randomNumber].classList.contains("on") && temp< 100) {
        p[randomNumber].classList.add("on");
    } else {
        if(temp < 50) {
            p[randomNumber].classList.remove("on");
            p[randomNumber].classList.remove("white");
        } else {
            p[randomNumber].classList.add("white");
            p[randomNumber].classList.remove("on");
        }
    }
    if(temp == 100+500) {
        clearInterval(myInterval);
    }
;}, 20);

function toggleStyle(elementId) {
    var element = document.getElementById(elementId);
    var dialog = document.getElementById('dialog-box');
    // Controlla se l'elemento ha già lo stile applicato
    if (element.style.height === '2px') {
      // Applica lo stile con transizione
      element.style.height = '10px';
      dialog.style.opacity = '1';
    } else {
      // Rimuovi lo stile con transizione
      setTimeout(function() {
        element.style.height = '2px';
        dialog.style.opacity = '0';
      }, 300); // Durata della transizione in millisecondi (es. 300ms)
    }
  }
  
  // Intervallo di 5 secondi
  setInterval(function() {
    toggleStyle('mouth');
  }, 3000);

  function isMobileWidth() {
    return window.innerWidth <= 768; // Esempio di soglia di 768 pixel
  }


  ////CAROOUSEL

  //Get elements
const btnSlidesEl = document.querySelectorAll(".btn-slide");
const slidesEl = document.querySelector(".slider-container");
const btnDotsEL = document.querySelector(".btn-dots");

let curIndex = 0,
  lastIndex = 0,
    timeout;

//Button Next/Prev slide click event
btnSlidesEl.forEach((btnSlides) => {
  btnSlides.addEventListener("click", function () {
    const self = this;
    const activeSlide = slidesEl.querySelector(".active-slide");
    curIndex = [...slidesEl.children].indexOf(activeSlide);
    lastIndex = slidesEl.children.length - 1;

    let nextIndex = 0;

    //Check if the trigger is the next button
    if (self.className.match("btn-slide--next")) {
      nextIndex = curIndex !== 0 ? curIndex - 1 : lastIndex;
    }
    //otherwise check if the trigger is the prev button
    else if (self.className.match("btn-slide--prev")) {
      nextIndex = curIndex !== lastIndex ? curIndex + 1 : 0;
    }

    setNextPrevSlide(curIndex, nextIndex);
    resetTimeout();
  });
});

//Click event for dot button
btnDotsEL.addEventListener("click", function (e) {
  if (e.target.classList.value === "btn-dot") {
      const curDot = btnDotsEL.querySelector(".active-dot");

      curIndex = [...btnDotsEL.children].indexOf(curDot);
      nextIndex = [...btnDotsEL.children].indexOf(e.target);
      setNextPrevSlide(curIndex, nextIndex);
      resetTimeout();
  }
});

function setNextPrevSlide(curIndex, nextIndex) {
  //Remove the class to the current slide
  slidesEl.children[curIndex].classList.remove("active-slide");
  //Assigned the class to the next slide
  slidesEl.children[nextIndex].classList.add("active-slide");
  
}

//Auto Slide
function autoSlide() {
  const activeSlide = document.querySelector(".active-slide");
  curIndex = [...slidesEl.children].indexOf(activeSlide);
  lastIndex = slidesEl.children.length - 1;

  let nextIndex = curIndex === lastIndex ? 0 : curIndex + 1;

  setNextPrevSlide(curIndex, nextIndex);

  timeout = setTimeout(autoSlide, 5000);
}

//Invoke auto slide
autoSlide();

function resetTimeout() {
  clearTimeout(timeout);
  timeout = setTimeout(autoSlide, 5000);
}

