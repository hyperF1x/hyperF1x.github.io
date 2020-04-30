function getDate(dateString) {
    var today = new Date();

    var dateArray = dateString.split("-");

    var dateObj = new Date(dateArray[0], Number(dateArray[1])-1, dateArray[2]);

    var betweenDay = (today.getTime() - dateObj.getTime())/1000/60/60/24;

    document.write(Math.floor(betweenDay));
    document.write(" 일");
}

function getTime() {
    let old = new Date(2020, 01, 12, 20, 42);
    old = old.getTime();
    let now = new Date().getTime();

    let date = new Date(now - old);
    date.format('hh:mm');    

    document.write(date);
}