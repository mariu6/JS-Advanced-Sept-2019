function attachEventsListeners() {
    const btn = document.getElementById("convert");
    const input = document.getElementById("inputDistance");
    const out = document.getElementById("outputDistance");
    let inputMenu = document.getElementById("inputUnits");
    let outMenu = document.getElementById("outputUnits");
    const units = [1000, 1, 0.01, 0.001, 1609.34, 0.9144, 0.3048, 0.0254];

    function handler() {
        let valueInM = input.value * units[inputMenu.selectedIndex];
        console.log(valueInM);
        out.value = valueInM / units[outMenu.selectedIndex];
    }

    btn.addEventListener("click", handler);
}



// const units = {km: 1000, m: 1, cm: 0.01, mm: 0.001, mi: 1609.34, yrd: 0.9144‬, ft: .3048‬, in: .0254};
// const units = { km: 0.001, m: 1, cm: 100, mm: 1000, mi: 0.0006213727366498068, yrd: 1.093613298337708‬, ft: 3.280839895013123‬, in: 39.37007874015748}