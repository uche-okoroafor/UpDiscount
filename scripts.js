//navbar
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 165 ||
    document.documentElement.scrollTop > 165
  ) {
    document.getElementById("scrollinbar").style.transition = " height .5s";
    document.getElementById("scrollinbar").style.borderBottom =
      "3px solid #007837";
    document.getElementById("scrollinbar").style.boxShadow =
      "2px 5px 11px 3px rgba(0,0,0,0.4)";

    function myFunc(x) {
      if (x.matches) {
        // If media query matches
        document.getElementById("scrollinbar").style.height = "50px";
      } else {
        {
          document.getElementById("scrollinbar").style.height = "70px";
        }
      }
    }
    var x = window.matchMedia("(max-width: 767px)");
    myFunc(x); // Call listener function at run time
    x.addListener(myFunc);
  } else {
    document.getElementById("scrollinbar").style.height = "0";
    document.getElementById("scrollinbar").style.borderBottom = "none";
    document.getElementById("scrollinbar").style.boxShadow = "none";
    closebar();
  }
}

// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
function showmodel() {
  modal.style.display = "block";
  closebar();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//slideshow

const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".indicator");
let index = 0;

prev.addEventListener("click", function () {
  prevSlide();
  updateCircleIndicator();
  resetTimer();
});

next.addEventListener("click", function () {
  nextSlide();
  updateCircleIndicator();
  resetTimer();
});

// create circle indicators
function circleIndicator() {
  for (let i = 0; i < slides.length; i++) {
    const div = document.createElement("div");

    div.setAttribute("onclick", "indicateSlide(this)");
    div.id = i;
    if (i == 0) {
      div.className = "active";
    }
    indicator.appendChild(div);
  }
}
circleIndicator();

function indicateSlide(element) {
  index = element.id;
  changeSlide();
  updateCircleIndicator();
  resetTimer();
}

function updateCircleIndicator() {
  for (let i = 0; i < indicator.children.length; i++) {
    indicator.children[i].classList.remove("active");
  }
  indicator.children[index].classList.add("active");
}

function prevSlide() {
  if (index == 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  changeSlide();
}

function nextSlide() {
  if (index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeSlide();
}

function changeSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[index].classList.add("active");
}

function resetTimer() {
  // when click to indicator or controls button
  // stop timer
  clearInterval(timer);
  // then started again timer
  timer = setInterval(autoPlay, 5000);
}

function autoPlay() {
  nextSlide();
  updateCircleIndicator();
}

let timer = setInterval(autoPlay, 6000);

//for search return

var tags = document.getElementsByClassName("tags");
var locations = document.getElementsByClassName("locationx");
var imageDisplay = document.querySelectorAll(".imagedisplay");
var products = document.getElementsByClassName("productsit");
var superMarkets = document.getElementsByClassName("supermarkxt");
var hotsales = document.querySelector("#hotsales");
var headingh2 = document.querySelectorAll(".headingh2");
var hotsalesDisplay = document.getElementsByClassName("hotsalesdisplay");
 var notFound = imageDisplay.length;

document.querySelector("#btnsearchopen").addEventListener("click", showmodel);


function showsearch() {
  var itemvalue = document.querySelector("#item").value;
  var supermaValue = document.querySelector("#supermarket").value;
  var locationValue = document.querySelector("#locationxc").value;


  for (let n = 0; n < imageDisplay.length; n++) {
    imageDisplay[n].style.display = "none";
 
  }

  for (let i = 0; i < headingh2.length; i++) {
    headingh2[i].style.display = "none";
  }

  // for (let i = 0; i <  hotsalesDisplay.length; i++) {
  //   hotsalesDisplay.style.display = "none";
  // }



  document.getElementsByClassName("slidebody")[0].style.display = "none";


  if (
    itemvalue.length > 0 &&
    supermaValue.length > 0 &&
    locationValue.length > 0
  ) {
    for (var i = 12; i < imageDisplay.length; i++) {
      if (
        products[i].innerHTML.toLowerCase() === itemvalue.toLowerCase() &&
        superMarkets[i].innerHTML.toLowerCase() ===
          supermaValue.toLowerCase() &&
        locations[i].innerHTML.toLowerCase() === locationValue.toLowerCase()
      ) {
        imageDisplay[i - 12].style.display = "block";
     

      } else {
console.log(notFound,imageDisplay.length)

        if (notFound === imageDisplay.length) {
          document.getElementById("notfound").style.display = "block";
        }
      }
    }
  } 
else if (itemvalue.length > 0 && supermaValue.length > 0) {
    for (var i = 12; i < imageDisplay.length; i++) {
      if (
        products[i].innerHTML.toLowerCase() === itemvalue.toLowerCase() &&
        superMarkets[i].innerHTML.toLowerCase() === supermaValue.toLowerCase()
      ) {

        imageDisplay[i - 12].style.display = "block";
          notFound = notFound-1;
      }
      else{

        if (notFound === imageDisplay.length) {
          document.getElementById("notfound").style.display = "block";
      }
    }
  } 

}

else if (itemvalue.length > 0 && locationValue.length > 0) {
    for (var i = 12; i < imageDisplay.length; i++) {
      if (
        products[i].innerHTML.toLowerCase() === itemvalue.toLowerCase() &&
        locations[i].innerHTML.toLowerCase() === locationValue.toLowerCase()
      ) {

        imageDisplay[i - 12].style.display = "block";
          notFound = notFound-1;
      }
      else{

        if (notFound === imageDisplay.length) {
          document.getElementById("notfound").style.display = "block";
      }
    }
  } 

}

else if (locationValue.length > 0 && supermaValue.length > 0) {
    for (var i = 12; i < imageDisplay.length; i++) {
      if (
        locations[i].innerHTML.toLowerCase() === locationValue.toLowerCase() &&
        superMarkets[i].innerHTML.toLowerCase() === supermaValue.toLowerCase()
      ) {

        imageDisplay[i - 12].style.display = "block";
          notFound = notFound-1;
      }
      else{

        if (notFound === imageDisplay.length) {
          document.getElementById("notfound").style.display = "block";
      }
    }
  } 

}

else {
    for (var i = 12; i < imageDisplay.length; i++) {
      if (products[i].innerHTML.toLowerCase() === itemvalue.toLowerCase()
      ||superMarkets[i].innerHTML.toLowerCase() === supermaValue.toLowerCase()
      || locations[i].innerHTML.toLowerCase() === locationValue.toLowerCase()) {
        imageDisplay[i - 12].style.display = "block";
         notFound = notFound-1;
      }
  }  
  }
 if(notFound === imageDisplay.length) {
 document.getElementById("notfound").style.display = "block";
 }
  modal.style.display = "none";
}

/*menuicon*/

var i = 0;

function togglin() {
  i++;
  if (i % 2 == 0) {
    document.querySelector("nav >.menuicon").classList.toggle("change");
    document.querySelector(".scrollinbar .menuicon").classList.toggle("change");
  } else {
    document.querySelector("nav >.menuicon").classList.toggle("change");
    document.querySelector(".scrollinbar .menuicon").classList.toggle("change");
  }
}

function myFunction(x) {
  var x = document.querySelector(".mobimenu");
  var y = document.querySelector(".closemenubar");
  if (x.style.opacity < "1") {
    x.style = "width:70%;opacity:1;transition: all 0.8s";
    y.style = "display:block";
    togglin();
  } else {
    x.style = "width:0;opacity:0;transition: all 0.8s";
    y.style = "display:none";
    togglin();
  }
}

function closeba() {
  document.body.style = "background:blue";
}

function closebar() {
  var x = document.querySelector(".mobimenu");
  if (x.style.opacity > "0") {
    x.style = "width:0;opacity:0;transition: all 0.8s";
    togglin();
    document.querySelector(".closemenubar").style = "display:none";
  }
}

$(document).ready(function () {
  $(".mobimenu").click(closebar);
});

/*menuicon */

function myFunc(x) {
  if (x.matches) {
    closebar();
  }
}
var x = window.matchMedia("(min-width: 767px)");
myFunc(x);
x.addListener(myFunc);
