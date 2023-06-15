document.getElementById("earth").addEventListener("click", function() {
  // Calcola la posizione dell'elemento con id "id2"
  var elementPosition = document.getElementById("moon").offsetTop;
  // Sottrai 100px dalla posizione per il margine superiore
  var targetPosition = elementPosition - 250;
  // Esegui lo scorrimento con margine superiore corretto
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
});

document.getElementById("moon").addEventListener("click", function() {
  // Calcola la posizione dell'elemento con id "id2"
  var elementPosition = document.getElementById("mars").offsetTop;
  // Sottrai 100px dalla posizione per il margine superiore
  var targetPosition = elementPosition - 250;
  // Esegui lo scorrimento con margine superiore corretto
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
});

document.getElementById("mars").addEventListener("click", function() {
  // Calcola la posizione dell'elemento con id "id2"
  var elementPosition = document.getElementById("jupiter").offsetTop;
  // Sottrai 100px dalla posizione per il margine superiore
  var targetPosition = elementPosition - 250;
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
        if(temp < flickerDuration.value) {
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