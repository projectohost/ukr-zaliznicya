
// ПОШУК ПОЇЗДІВ

function searchTrain() {

    // Отримуємо текст із поля пошуку

    let input = document.getElementById("trainSearch").value.toLowerCase().trim();

    // Отримуємо таблицю

    let table = document.getElementById("trainTable");

    let rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    let found = 0;


    // Перевіряємо кожен рядок

    for (let i = 0; i < rows.length; i++) {

        let rowText = rows[i].textContent.toLowerCase();

        // Якщо знайшли збіг

        if (rowText.includes(input) && input !== "") {

            rows[i].style.display = "";

            found++;

        } else if (input === "") {

            rows[i].style.display = "";

            found++;

        } else {

            rows[i].style.display = "none";

        }

    }


    // Повідомлення про результат

    if (found === 0) {

        alert("Поїзд не знайдено! Спробуй інший номер або маршрут.");

    }

}


// СКИНУТИ ПОШУК

function resetSearch() {

    document.getElementById("trainSearch").value = "";

    let table = document.getElementById("trainTable");

    let rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {

        rows[i].style.display = "";

    }

}


// ПОШУК ПРИ НАТИСКАННІ ENTER

document.getElementById("trainSearch").addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        searchTrain();

    }

});


// ПОВІДОМЛЕННЯ В КОНСОЛІ

console.log("RailLine — сторінка запізнень завантажена!");
