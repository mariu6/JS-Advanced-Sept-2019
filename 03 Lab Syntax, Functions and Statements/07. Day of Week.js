function week(day) {
    const daysMap = {   // Създавам си обект - мап (карта)
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6,
        "Sunday": 7
    }
    console.log(daysMap[day] ? daysMap[day] : "error");  
    // с терарен оператор задавам дефолтна стойност error
}

week('Monday'); 
week('Tuesday');
week('Wednesday');