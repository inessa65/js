let sep
function startTime() {
    var tm = new Date();
    var h = tm.getHours();
    var m = tm.getMinutes();
    var s = tm.getSeconds();
    
    sep = sep == ':' ? ' ' : ':'
    document.getElementById('clock').innerHTML = h + sep + m + sep + s

    t = setTimeout('startTime()', 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
startTime()
