
function getGreeting() {
    const hour = new Date().getHours(); 

    if (hour >= 7 && hour < 12) {
        return "Доброе утро!";
    } else if (hour >= 12 && hour < 16) {
        return "Добрый день!";
    } else if (hour >= 16 && hour < 22) {
        return "Добрый вечер!";
    } else {
        return "Доброй ночи!";
    }
}

    alert(getGreeting());
