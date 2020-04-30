function focus() {
    const divs = document.querySelector("body > div").children;
    Array.from(divs).map(x => x.children[1].addEventListener("focus", handler));
    // трябваше да мапна 4-те инпута и да им закача ивентлисенери, за да мине в джъдж...
    function handler(e) {
        // console.log(e.target);
        // console.log(e.target.parentNode);
        Array.from(divs).map(x => x.removeAttribute("class", "focused"));
        if (e.target.nodeName === "INPUT") {
            e.target.parentNode.setAttribute("class", "focused");
        }
    }
} 