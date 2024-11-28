function daysUntilNewYear() {

    let today = new Date();
    let newYear = new Date (today.getFullYear() + 1, 0, 1);
    let diff = newYear - today;
    let daysLeft = Math.floor(diff/(1000*60*60*24));
    return daysLeft;
}

console.log(`До Нового года осталось ${daysUntilNewYear()} дней.`);
