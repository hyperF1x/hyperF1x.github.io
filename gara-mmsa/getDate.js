var today = new Date();
var dateString = "2020-01-12";

var dateArray = dateString.split("-");

var dateObj = new Date(dateArray[0], Number(dateArray[1])-1, dateArray[2]);

var betweenDay = (today.getTime() - dateObj.getTime())/1000/60/60/24;

document.write(Math.floor(betweenDay));
document.write(" 일");
