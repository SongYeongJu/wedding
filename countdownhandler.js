// Set the date we're counting down to
var countDownDate = new Date("Nov 3, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var countdownfunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    var messageElement = document.getElementById("countdown-message");
    
    if (distance > 0) {
        messageElement.innerHTML = "<div>보형</div> <div class=\"counter-point\">♥</div><div>영주의 결혼식이</div><div class=\"counter-point\">" + days + "일</div> <div>남았습니다.</div>";
    } else {
        var daysPassed = Math.abs(days);
        messageElement.innerHTML = "<div>보형</div> <div class=\"counter-point\">♥</div><div>영주의 결혼식이</div> <div class=\"counter-point\">" + daysPassed + "일</div> <div>지났습니다.</div>";
    }
}, 1000);