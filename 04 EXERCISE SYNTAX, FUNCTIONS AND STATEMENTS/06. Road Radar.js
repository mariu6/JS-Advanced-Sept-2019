function radar(array) {
    const speedsMap = {   // Създавам си обект - мап (карта)
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    };
    let overspeed = array[0] - speedsMap[array[1]];
    if (overspeed > 40) {
        console.log("reckless driving");
    } else if (overspeed > 20) {
        console.log("excessive speeding");
    } else if (overspeed > 0) {
        console.log("speeding");
    }
}

radar([40, 'city']);

radar([21, 'residential']);