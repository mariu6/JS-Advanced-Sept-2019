function bmi(...input) {
    input = [...input].map(x => typeof (x) === "number" ? Math.round(x) : x);
    function status(bmi) {
        return (bmi < 18.5) ? "underweight" :
            (bmi < 25) ? "normal" :
                (bmi < 30) ? "overweight" :
                    "obese"
    }
    // input = input[0] //- за да върви в моята конзола, но джъдж не го иска ?!
    let calculation = Math.round(input[2] / ((input[3] / 100) ** 2));
    let out = {
        "name": input[0],
        "personalInfo": {
            ["age"]: input[1],
            ["weight"]: input[2],
            ["height"]: input[3]
        },
        "BMI": calculation,
        "status": status(calculation)
    }
    if (calculation >= 30) {
        out["recommendation"] = 'admission required'
    }
    return out;
}

console.log(bmi('Peter', 29, 175, 182));

function bmiStatus() {
    let array = Object.values(arguments);
    let calculation = Math.round(array[2] / ((array[3] / 100) ** 2));
    function status(bmi) {
        return (bmi < 18.5) ? "underweight" :
            (bmi < 25) ? "normal" :
                (bmi < 30) ? "overweight" :
                    "obese"
    }
    let out = {
        "name": array[0],
        "personalInfo": {
            "age": array[1],
            "weight": array[2],
            "height": array[3]
        },
        "BMI": Math.round(array[2] / ((array[3] / 100) ** 2)),
        "status": status(calculation)
    }
    if (calculation >= 30) {
        out["recommendation"] = 'admission required'
    }
    return out;
}

console.log(bmiStatus('Peter', 29, 75, 182));