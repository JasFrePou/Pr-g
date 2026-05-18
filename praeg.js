// topnav
function myFunction() {
    document.getElementById("Topnav")
        .classList.toggle("responsive");
}

document.addEventListener("click", function(event) {

    const nav = document.getElementById("Topnav");

    if (
        !nav.contains(event.target)
    ) {
        nav.classList.remove("responsive");
    }
});

// Slideshow container
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
if (slides && next && prev) { let index = 0;
    function updateSlider() { const slideWidth = slide[0].clientWidth;
        slides.style.transform = `translateX(-${index * slideWidth}px)`; }

    next.addEventListener("click", function() {const visibleSlides =
            window.innerWidth <= 815 ? 1 : 3;
        const maxIndex = slide.length - visibleSlides;
        if (index < maxIndex) {index++;updateSlider();}
    });
    prev.addEventListener("click", function() {
        if (index > 0) {index--;updateSlider();}
    });
window.addEventListener("resize",
        updateSlider);
        }


// Foldud tekstbokse
const knapper =
    document.querySelectorAll(".laesmere");

knapper.forEach(function(knap) {

    knap.addEventListener("click", function() {

        const tekstBox =
            knap.previousElementSibling;

        tekstBox.classList.toggle("vis");

        if (tekstBox.classList.contains("vis")) {

           knap.innerHTML =
    `Læs mindre <i class="fa-solid fa-arrow-up"></i>`;

        } else {

            knap.innerHTML =
    `Læs mere <i class="fa-solid fa-arrow-down"></i>`;
        }

    });

});
        // Får knap til at forsvinde hvis alt tekst bliver vist
       function checkFoldud() {const foldudBokse =
        document.querySelectorAll(".foldud");
    foldudBokse.forEach(function(boks) {
        const knap =
            boks.nextElementSibling;
        if (boks.scrollHeight <= boks.clientHeight + 10) {
            knap.style.display = "none";} else {
            knap.style.display = "block";}
    });
}
checkFoldud();
window.addEventListener(
    "resize",
    checkFoldud
);


// Kontaktformular, skal stå nederst
// Initialiser EmailJS
emailjs.init("OhucI94L4GKAj0Iso");


// Formular submit
document
    .getElementById("kontakt-form")
    .addEventListener("submit", function(event) {

    event.preventDefault();

    emailjs.sendForm(
        "service_atnb35j",
        "template_ywetgc4",
        this
    )
    .then(() => {

        alert("Besked sendt!");

        this.reset();

    })
    .catch((error) => {

        alert("Noget gik galt");

        console.log(error);

    });

});