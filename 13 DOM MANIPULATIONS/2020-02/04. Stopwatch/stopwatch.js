function stopwatch() {
    let time = document.getElementById("time");
    const startBtn = document.getElementById("startBtn");
    const stopBtn = document.getElementById("stopBtn");
    startBtn.addEventListener("click", startHandler);
    stopBtn.addEventListener("click", stopHandler);
    time.innerHTML = "00:00";
    
    function startHandler() {
        startBtn.disabled = true;
        stopBtn.disabled = false;
        
        let m = "00";
        let s = 0;
        
        timer();
        
        function timer() {
            if (s > 59) {               // за смяна на минутите
                +m++;                   // обръща "00" в 0 и увеличава с 1; 
                s = 0;                  // занулява секундите 
                m = checkTime(m);       // добавя 0 отпред, ако е по-малко от 10 
            }
            if (!stopBtn.disabled === true) {
                s = checkTime(s);                // ако тези три реда
                time.innerHTML = m + ":" + s;    // не са в проверката, при натискане   
                s++;                            // на СТОП бутон ще изброи още една секунда
                return setTimeout(timer, 1000);
            } 
        }
    }

    function stopHandler() {
        startBtn.disabled = false;
        stopBtn.disabled = true;
       
    }
   
    function checkTime(i) {
        if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
        return i;
    }


    // Часовник!
    // startTime()
    // function startTime() {
    //     var today = new Date();
    //     var h = today.getHours();
    //     var m = today.getMinutes();
    //     var s = today.getSeconds();
    //     m = checkTime(m);
    //     s = checkTime(s);
    //     document.getElementById('time').innerHTML =
    //         h + ":" + m + ":" + s;
    //     var t = setTimeout(startTime, 500);
    // }

    // function checkTime(i) {
    //     if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    //     return i;
    // }
}