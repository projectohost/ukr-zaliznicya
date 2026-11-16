
// 1. ПЛАВНЕ ПРОКРУЧУВАННЯ

let mainButton = document.querySelector(".main-button");

mainButton.addEventListener("click", function(event) {

    event.preventDefault();

    document.querySelector("#services").scrollIntoView({

        behavior: "smooth"

    });

});


// 2. АНІМАЦІЯ ПОЯВИ 

let cards = document.querySelectorAll(
    ".service-card, .direction-card, .ad-card"
);

let observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});


cards.forEach(function(card) {

    card.classList.add("hidden");

    observer.observe(card);

});


// 3. ПОВІДОМЛЕННЯ В КОНСОЛІ

console.log("RailLine успішно завантажено!");

console.log("Ласкаво просимо на RailLine!");
