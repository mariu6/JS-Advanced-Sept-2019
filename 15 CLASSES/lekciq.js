

// class Something{
//     constructor(param) {

//     }

// }

// class Something2 extends Something {
//  constructor(param) {
//         super(param)
//     }
// }


class DomElement {                // klas trqbwa da wyrne obekt
    _tag;                          // deklarirane na propertita v nachaloto. Move da ima stojnost i tip
    _content = "";                      // _ e za private
    constructor(tag, content) {
        this.tag = tag;
        this.content = content;
    }
    render() {
        const e = document.createElement(this._tag);
        e.innerHTML = 11111111111;
    }
}


class Main {
    handleEvent(e) {
        console.log(e);
        let keys = Object.keys(MOCK[0])
        let html = "";
        html += "<table>"";
        html += "<tr>";
        html += keys.map(x => '<th>${x}</th>').join("");
        html += "</tr>;
        html += "</table>";

        document.all.app.innerHTML = html;

    }
}

document.addEventListener("DOMContentLoad", new Main());




RAZLIKA MEJDU RECORD I KLASS - da se prochete nqkyde i da se znae


