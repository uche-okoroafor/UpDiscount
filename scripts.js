//navbar
window.onscroll = function() {
    handleScroll();
};

function handleScroll() {
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
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
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

prev.addEventListener("click", function() {
    prevSlide();
    updateCircleIndicator();
    resetTimer();
});

next.addEventListener("click", function() {
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
var searched = document.querySelector("#searched");
var searchClick = document.querySelector("#searchClick");
var searchResult = document.querySelector("#searchresult");

document.querySelector("#btnsearchopen").addEventListener("click", showmodel);



function showsearch() {
    var itemValue = document.querySelector("#item").value.replace(/\s/g, '').toLowerCase();
    var supermarketValue = document.querySelector("#supermarket").value.replace(/\s/g, '').toLowerCase();
    var locationValue = document.querySelector("#locationxc").value.replace(/\s/g, '').toLowerCase();

    var itemInput = document.querySelector("#item").value
    var supermarketInput = document.querySelector("#supermarket").value
    var locationInput = document.querySelector("#locationxc").value

    for (let n = 0; n < imageDisplay.length; n++) {
        imageDisplay[n].style.display = "none";

    }

    for (let i = 0; i < headingh2.length; i++) {
        headingh2[i].style.display = "none";
    }

    if (
        itemValue.length > 0 &&
        supermarketValue.length > 0 &&
        locationValue.length > 0
    ) {
        for (var i = 12; i < imageDisplay.length; i++) {
            if (
                products[i].innerHTML.toLowerCase().replace(/\s/g, '') === itemValue &&
                superMarkets[i].innerHTML.toLowerCase().replace(/\s/g, '') ===
                supermarketValue &&
                locations[i].innerHTML.toLowerCase().replace(/\s/g, '') === locationValue
            ) {
                imageDisplay[i - 12].style.display = "block";
                searchResult.style.display = 'block';
                document.getElementById("notfound").style.display = "none";

                searched.innerHTML = 'Search Result For :' + '&nbsp' + itemInput;

            } else {
                console.log(notFound, imageDisplay.length)

                if (notFound === imageDisplay.length) {
                    document.getElementById("notfound").style.display = "block";
                }
            }
        }
    } else if (itemValue.length > 0 && supermarketValue.length > 0) {
        for (var i = 12; i < imageDisplay.length; i++) {
            if (
                products[i].innerHTML.toLowerCase().replace(/\s/g, '') === itemValue &&
                superMarkets[i].innerHTML.toLowerCase().replace(/\s/g, '') === supermarketValue
            ) {
                searchResult.style.display = 'block';
                document.getElementById("notfound").style.display = "none";
                searched.innerHTML = 'Search Result For :' + '&nbsp' + itemInput;
                imageDisplay[i - 12].style.display = "block";
                notFound = notFound - 1;
            } else {

                if (notFound === imageDisplay.length) {
                    document.getElementById("notfound").style.display = "block";
                }
            }
        }

    } else if (itemValue.length > 0 && locationValue.length > 0) {
        for (var i = 12; i < imageDisplay.length; i++) {
            if (
                products[i].innerHTML.toLowerCase().replace(/\s/g, '') === itemValue &&
                locations[i].innerHTML.toLowerCase().replace(/\s/g, '') === locationValue
            ) {
                searchResult.style.display = 'block';
                document.getElementById("notfound").style.display = "none";
                searched.innerHTML = 'Search Result For :' + '&nbsp' + itemInput;
                imageDisplay[i - 12].style.display = "block";
                notFound = notFound - 1;
            } else {

                if (notFound === imageDisplay.length) {
                    document.getElementById("notfound").style.display = "block";
                }
            }
        }

    } else if (locationValue.length > 0 && supermarketValue.length > 0) {
        for (var i = 12; i < imageDisplay.length; i++) {
            if (
                locations[i].innerHTML.toLowerCase().replace(/\s/g, '') === locationValue &&
                superMarkets[i].innerHTML.toLowerCase().replace(/\s/g, '') === supermarketValue
            ) {
                searchResult.style.display = 'block';
                document.getElementById("notfound").style.display = "none";
                searched.innerHTML = 'Search Result For :' + '&nbsp' + supermarketInput;
                imageDisplay[i - 12].style.display = "block";
                notFound = notFound - 1;
            } else {

                if (notFound === imageDisplay.length) {
                    document.getElementById("notfound").style.display = "block";
                }
            }
        }

    } else {
        for (var i = 12; i < imageDisplay.length; i++) {
            if (products[i].innerHTML.toLowerCase().replace(/\s/g, '') === itemValue ||
                superMarkets[i].innerHTML.toLowerCase().replace(/\s/g, '') === supermarketValue ||
                locations[i].innerHTML.toLowerCase().replace(/\s/g, '') === locationValue) {

                searchResult.style.display = 'block';
                document.getElementById("notfound").style.display = "none";
                searched.innerHTML = 'Search Result For' + '&nbsp' + itemInput || supermarketInput || locationInput;
                imageDisplay[i - 12].style.display = "block";
                notFound = notFound - 1;
                console.log(itemValue);
            }
        }
    }
    if (notFound === imageDisplay.length) {
        document.getElementById("notfound").style.display = "block";
    }
displayDots();
    modal.style.display = "none";
    searchClick.click();
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

$(document).ready(function() {
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


let dots = document.querySelectorAll('.dots');
let preSearchDisplay=document.querySelector('#pre-search-display');

function displayDots() {
    let i = 0;
preSearchDisplay.style.display='block'  ;
   let intervals = setInterval(() => {
        i !== dots.length - 1 ? dots[i].style.visibility = 'visible' :
            dots.forEach(dot => {
                dot.style.visibility = 'hidden';
                i = -1;
            });
        i++
    }, 200);


setTimeout(() => {
preSearchDisplay.style.display='none'  ;
clearInterval(intervals);
}, 2000);


}
