
function attachGradientEvents() {
    console.log('TODO:...');
    let wdth = parseInt(getComputedStyle(document.all.gradient).width);      // mahane na px (300px)

    document.all.gradient.addEventListener("click", function (e) {          //  document.all.gradient za judge = getElementById
        document.all.result.innerHTML = `${Math.floor(e.offsetX / wdth * 100)}%`;
    })

}

// updated from teacher

function calculatePercentage(x,y) {
    return Math.floor(x / y * 100);
}

function resultDivTemplateString(o) {
    return `${o}%`;
}

function constructGradient(gradient, result) {
    return {
        gradient,
        result,
        handleEvent: function (e) {
            let wdth = parseInt(getComputedStyle(this.gradient).width);
            this.result.innerHTML = resultDivTemplateString(calculatePercentage(e.offsetX, wdth))
        }
    }
}

function attachGradientEvents() {
    document.all,gradient.addEventListener("click", constructGradient(document.all.gradient, document.all.result));
}
