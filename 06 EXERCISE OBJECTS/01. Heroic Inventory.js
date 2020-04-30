function solve(input) {
    let heroes = [];
    for (const line of input) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        heroes.push({ name, level, items });
    }
    console.log(JSON.stringify(heroes));
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)


function solve1(array) {
    let out = array.map(hero => {
        let [name, level,items] = hero.split(" / ");
        level = Number(level);
        items = items? items.split(", "): []
        return {name, level,items}
    });
    console.log(JSON.stringify(out));
}



solve1(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)