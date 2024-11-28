function getDayOfWeek(data)
{
    let days=["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    return days[data.getDay()];
}


let date=new Date (prompt("Введите дату (гг.мм.дд)"))

console.log(getDayOfWeek(date))