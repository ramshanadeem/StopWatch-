var  ms =0, s=0 , m=0;
var timer;
var stopwatchEl = document.querySelector('.stopwatch');
 
function start() {
    if(!timer)
    {
        timer=setInterval(run,10);
    }
    

}
function run() {
    stopwatchEl.innerHTML = getTimer();
    ms++;
    if( ms == 100)
    {
        ms=0;
        s++;
    }
    if(s==60)
    {
        s=0;
        m++;
    }
}
function pause() {
    stopTimer();
}
function stop() {
    stopTimer();
    ms=0;
    s=0;
    m=0;
    stopwatchEl.innerHTML = getTimer();
}
function stopTimer() {
    clearInterval(timer);
    timer=false;
}
function getTimer() {
    return stopwatchEl.innerHTML= (m< 10 ? "0" + m:m) + ":" + (s<10 ? "0" +s:s) + ":" + (ms <10 ? "0" + ms :ms);
}
 
function restart() {
   stop();
   start();
}