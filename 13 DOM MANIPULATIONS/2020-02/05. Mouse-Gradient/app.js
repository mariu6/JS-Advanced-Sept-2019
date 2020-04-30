function attachGradientEvents() {
    const div = document.getElementById("gradient");
    const result = document.getElementById("result");

    div.addEventListener("mousemove", function (evt) {
        // console.log(evt.offsetX);
        // let xInDiv = evt.pageX - div.offsetLeft;
        let xInDiv = +evt.offsetX;
        // let widthOfDiv = +div.offsetWidth;
        let persentage = Math.floor(xInDiv / 300 * 100);
        result.textContent = `${persentage}%`;     // innerHTML не работи!
    })
}