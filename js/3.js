function getWeekDays() {

    let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
    let today = new Date().getDay();
    let prevDay = (today - 1 + 7) % 7; 
    let nextDay = (today + 1) % 7; 

    return {
        prev: days[prevDay],
        curr: days[today],
        next: days[nextDay]
    }
}

console.log(getWeekDays());
