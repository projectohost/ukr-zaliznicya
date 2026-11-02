```javascript
// Знаходимо елементи HTML
const form = document.getElementById("search-form");
const from = document.getElementById("from");
const to = document.getElementById("to");
const date = document.getElementById("date");
const results = document.getElementById("train-results");

// Список потягів
const trains = [
    {
        name: "Інтерсіті",
        from: "Київ",
        to: "Львів",
        time: "08:00",
        price: 500
    },
    {
        name: "Експрес",
        from: "Київ",
        to: "Одеса",
        time: "10:00",
        price: 400
    },
    {
        name: "Карпатський експрес",
        from: "Львів",
        to: "Івано-Франківськ",
        time: "09:00",
        price: 250
    },
    {
        name: "Столичний експрес",
        from: "Львів",
        to: "Київ",
        time: "12:00",
        price: 550
    }
];

// Встановлюємо сьогоднішню дату
date.value = new Date().toLocaleDateString("sv-SE");
date.min = date.value;

// Пошук потягів
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Перевіряємо міста
    if (from.value === to.value) {
        alert("Обери різні міста!");
        return;
    }

    // Шукаємо потяги
    const foundTrains = trains.filter(function(train) {
        return train.from === from.value &&
               train.to === to.value;
    });

    // Очищаємо попередні результати
    results.innerHTML = "";

    // Якщо потягів немає
    if (foundTrains.length === 0) {
        results.innerHTML = "<h3>Потягів не знайдено!</h3>";
        return;
    }

    // Показуємо знайдені потяги
    foundTrains.forEach(function(train) {
        results.innerHTML += `

        `;
    });
});

// Купівля квитка
function buyTicket(name, price) {
    alert(
        "Вітаємо!\n" +
        "Потяг: " + name + "\n" +
        "Ціна: " + price + " грн\n" +
        "Це демонстраційний квиток!"
    );
}
```
