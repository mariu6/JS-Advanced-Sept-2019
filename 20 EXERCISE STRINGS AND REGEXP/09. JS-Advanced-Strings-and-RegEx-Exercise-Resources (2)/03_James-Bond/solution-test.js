const solve = require("./solution");
let {expect} = require("chai");

// second zero test
document.body.innerHTML = `
    <div id="container">
        <main id="main">
            <div id="exercise">
                <form>
                    <div>
                        <label for="array" class="center">Array</label>
                        <input type="text" id="array">
                    </div>
                    <input type="button" onclick="solve()" value="Calculate">
                </form>
                <div id="result"></div>
            </div>
        </main>
    </div>
`;

$("#array").val('["specialKey", "In this text the specialKey HELLOWORLD! is correct, but", "the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while", "SpeCIaLkeY SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!"]');

result();

let res = document.getElementById('result');


expect(res.children[0].textContent).to.equal("In this text the specialKey helloworld1 is correct, but");
expect(res.children[1].textContent).to.equal("the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while");
expect(res.children[2].textContent).to.equal("SpeCIaLkeY som22eth4in and SPECIALKEY 33443344 are!");