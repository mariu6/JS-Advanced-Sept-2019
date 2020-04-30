function walk(...array) {
    let length = array[0] * array[1];
    let time = Math.floor(length / 500) * 60;
    let speed = array[2] / 3.6;
    time += Math.round(length / speed);

    var date = new Date(null);
    date.setSeconds(time); // specify value for SECONDS here
    var timeString = date.toISOString().substr(11, 8);
    console.log(timeString)
}
// walk(4000, 0.60, 5);
// 00:32:48

walk(2564, 0.70, 5.5);
// 00:22:35 

