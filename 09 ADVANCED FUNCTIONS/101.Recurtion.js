
function main() {
    let categories = [
        { id: 'animals', parent: null },
        { id: 'mammals', parent: 'animals' },
        { id: 'cats', parent: 'mammals' },
        { id: 'dogs', parent: 'mammals' },
        { id: 'chihuahua', parent: 'dogs' },
        { id: 'labrador', parent: 'dogs' },
        { id: 'persian', parent: 'cats' },
        { id: 'siamese', parent: 'cats' }
    ];

    let makeTree = (categories, parent) => {
        let node = {};
        categories.filter(c => c.parent === parent).forEach(c => {
            console.log(categories.filter(c => c.parent === parent))
            console.log(c.id)
            node[c.id] = makeTree(categories, c.id)
            return c;
        });
        return node;
    }
    console.log(JSON.stringify(makeTree(categories, null), null, 2))  // 2 is for offset

}

main()

/* Какво се случва,
при първото преминаване(т.е. при извикването) подаваме - (categories, null) (линия 18); 
отива на ред 15 и филтрира. За първото минаване - само първия ред, защото само той е с parent: null;
и този първи ред го foreach-ваме и записваме в node пропърти със същото id като 
категорията (в случая = animals) и със стойност - функцията makeTree(categories - отново същото, c.id - следващото 
    филтриране ще бъде по предишното id (при първото връщане - animals, при второто - mammals, и т.н.))
*/
