
var offclose = document.getElementById("close")
var x = document.getElementById("x")

x.addEventListener("click", function () {
    offclose.style.display = "none"
})

// var offers = document.getElementById("offers")
// var closedd = document.getElementById("close")

// closedd.addEventListener("click", function () {
//     offers.style.display = "none"
// })

document.addEventListener("DOMContentLoaded", function () {
    var slider = document.querySelector(".imageslider");
    var leftArrow = document.querySelector(".arrow1");
    var rightArrow = document.querySelector(".arrow2");

    var currentIndex = 0;
    var slides = document.querySelectorAll(".imageslider img");
    var slideCount = slides.length;

    function updateSliderPosition() {
        var offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    rightArrow.addEventListener("click", function () {
        if (currentIndex < slideCount - 1) {
            currentIndex++;
            updateSliderPosition();
        }
    });

    leftArrow.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    // Initialize slider position
    updateSliderPosition();

    // Handle heart click events
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.addEventListener('click', function () {
            this.classList.toggle('liked');
        });
    });
});


// Menu bar

var menu = document.getElementById("menu")
var navclosed = document.querySelector(".nav__titles2")
var menbar = document.querySelector(".nav__titles")

menu.addEventListener("click", function () {
    menbar.style.right = "0%"
})
navclosed.addEventListener("click", function () {
    menbar.style.right = "-100%"
})