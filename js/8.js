let daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
let month = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
let celebrityDays = [
    { day: 1, month: 0, year: new Date().getFullYear()},
    { day: 7, month: 0, year: new Date().getFullYear()},
    { day: 23, month: 1, year: new Date().getFullYear() },
    { day: 8, month: 2, year: new Date().getFullYear() },
    { day: 1, month: 4, year: new Date().getFullYear() },
    { day: 9, month: 4, year: new Date().getFullYear() },
    { day: 12, month: 5, year: new Date().getFullYear() },
    { day: 4, month: 10, year: new Date().getFullYear() }
];

function getDayOfWeek(data)
{
    let days=["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    return days[data.getDay()];
}

celebrityDays.forEach(function (elem) {
    let date = new Date(elem.year, elem.month, elem.day);
    let str = `${elem.day} ${month[elem.month]} ${elem.year} выпадает на ${getDayOfWeek(date)}`;
    console.log(str);
})
