// Плавне прокручування до розділів

const buttons = document.querySelectorAll('a[href^="#"]');

buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        const section = document.querySelector(button.getAttribute("href"));

        if (section) {
            event.preventDefault();

            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Підсвічування рядків таблиці

const rows = document.querySelectorAll("#internationalTable tr");

rows.forEach(function(row) {
    row.addEventListener("click", function() {
        rows.forEach(function(item) {
            item.classList.remove("selected");
        });

        row.classList.add("selected");
    });
});

console.log("Сторінка міжнародних рейсів RailLine завантажена!");