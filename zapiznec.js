// Дані про поїзди
let trains = [
    {
        number: "002П",
        from: "Київ",
        to: "Львів",
        time: "08:30",
        platform: "3",
        delay: 45,
        status: "Запізнюється"
    },
    {
        number: "122К",
        from: "Київ",
        to: "Одеса",
        time: "09:15",
        platform: "5",
        delay: 0,
        status: "За розкладом"
    },
    {
        number: "718К",
        from: "Львів",
        to: "Київ",
        time: "10:40",
        platform: "2",
        delay: 25,
        status: "Запізнюється"
    },
    {
        number: "104Л",
        from: "Харків",
        to: "Київ",
        time: "11:20",
        platform: "4",
        delay: 0,
        status: "За розкладом"
    },
    {
        number: "768П",
        from: "Дніпро",
        to: "Львів",
        time: "12:00",
        platform: "1",
        delay: 60,
        status: "Запізнюється"
    },
    {
        number: "040П",
        from: "Одеса",
        to: "Київ",
        time: "13:30",
        platform: "6",
        delay: 0,
        status: "Скасовано"
    }
];

// Знаходимо елементи HTML
let trainList = document.getElementById("trainList");
let searchInput = document.getElementById("searchInput");
let stationFilter = document.getElementById("stationFilter");

// Показуємо поїзди
function showTrains() {

    trainList.textContent = "";

    let search = searchInput.value.toLowerCase();
    let station = stationFilter.value;

    for (let i = 0; i < trains.length; i++) {

        let train = trains[i];

        // Пошук поїзда
        if (
            !train.number.toLowerCase().includes(search) &&
            !train.from.toLowerCase().includes(search) &&
            !train.to.toLowerCase().includes(search)
        ) {
            continue;
        }

        // Фільтр за станцією
        if (station !== "all" && train.from !== station) {
            continue;
        }

        // Створюємо картку
        let card = document.createElement("div");
        card.className = "train-card";

        let title = document.createElement("h3");
        title.textContent = "Поїзд № " + train.number;

        let route = document.createElement("p");
        route.textContent = train.from + " — " + train.to;

        let time = document.createElement("p");
        time.textContent = "Відправлення: " + train.time;

        let platform = document.createElement("p");
        platform.textContent = "Колія: " + train.platform;

        let status = document.createElement("p");
        status.textContent = train.status;

        let delay = document.createElement("p");

        if (train.delay > 0) {
            delay.textContent = "Запізнення: " + train.delay + " хв";
            status.className = "delayed";
        } else if (train.status === "Скасовано") {
            delay.textContent = "Рейс скасовано";
            status.className = "cancelled";
        } else {
            delay.textContent = "Запізнення відсутнє";
            status.className = "on-time";
        }

        // Додаємо інформацію до картки
        card.appendChild(title);
        card.appendChild(route);
        card.appendChild(time);
        card.appendChild(platform);
        card.appendChild(status);
        card.appendChild(delay);

        // Додаємо картку на сторінку
        trainList.appendChild(card);
    }
}

// Пошук та фільтр
searchInput.addEventListener("input", showTrains);
stationFilter.addEventListener("change", showTrains);

// Перший запуск
showTrains();
