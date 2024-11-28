function getAge(data){
    let now=new Date();
    let ageYear=now.getFullYear()-data.getFullYear();
    let ageMonth=now.getMonth()-data.getMonth();
    return `Возраст в годах ${ageYear}, в месяцах ${ageYear*12+ageMonth}, в днях ${Math.floor(ageYear*365+ageMonth*30+now.getDate()-data.getDate()+ageYear/4)}`
}

let date= new Date(prompt("Введите вашу дату рождения гг.мм.дд"))
console.log(getAge(date))