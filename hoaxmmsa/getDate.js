function getDate(dateString) {
    var today = new Date();

    var dateArray = dateString.split("-");

    var dateObj = new Date(dateArray[0], Number(dateArray[1])-1, dateArray[2]);

    var betweenDay = (today.getTime() - dateObj.getTime())/1000/60/60/24;

    return Math.floor(betweenDay);
}

function getTime(hour, minutes) {         
    timer = setInterval(() => {
        let old = new Date(00, 0, 0, hour, minutes);
        old = old.getTime();
        let now = new Date().getTime();

        let date = new Date(now - old);
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();

        if(hh < 10)
            hh = "0" + hh;
        if(mm < 10)
            mm = "0" + mm;
        if(ss < 10)
            ss = "0" + ss;
        
        document.getElementById("time").innerHTML = hh + ":" + mm + ":" + ss;
    }, 1000);    
}