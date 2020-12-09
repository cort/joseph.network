var countDownDate = new Date("Dec 25, 2020 00:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "0";
    }

    var lessthan = days.toString();
    var lessthanten = lessthan.substring(1);

    if (days < 10) {
        console.log(lessthanten);
        document.getElementById("countdown").innerHTML = lessthanten;
    } else {
        document.getElementById("countdown").innerHTML = days;
    }

}, 1000);
