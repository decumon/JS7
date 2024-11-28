function getBlackFridays(){
    let dat=new Date();
    let arr=new Array()
    for (let i=0; i<12; i++)
    {
        dat.setDate(13);
        dat.setMonth(i);
        console.log(dat.getDay());
        if (dat.getDay()==5) arr.push(dat.toString());
    }

    return arr;
}

console.log(getBlackFridays())