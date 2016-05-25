var deadline = '2017-06-03T23:15:00Z';

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / (1000 * 60)) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor((t / (1000 * 60 * 60 * 24)));
    return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

function updateTime(t) {
    var clock = document.getElementById('countdown');
    clock.innerHTML = t.days + ' days ' + t.hours + ' hours ' + t.minutes + ' minutes and ' + t.seconds + ' seconds';
}

function initializeClock(endtime) {
    var t = getTimeRemaining(endtime);
    updateTime(t);
    var timeinterval = setInterval(function () {
        t = getTimeRemaining(endtime);
        updateTime(t);
        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

initializeClock(deadline);
