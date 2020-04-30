// function cal(array) {
//     let obj = {};
//     for (let i = 0; i < array.length; i += 2) {
//        obj[array[i]] = Number(array[i+1]);
//     }
//     console.log(obj);
// }
// cal(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);
// // { Yoghurt: 48, Rise: 138, Apple: 52 }
// cal(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42])
// // { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }


function objCalories(array) {
    let objCalories = {};
    array.map((x,i) => {
        if(Number(x) != x) objCalories[x] = Number(array[i+1]);
    })
    console.log(objCalories);
}
objCalories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
