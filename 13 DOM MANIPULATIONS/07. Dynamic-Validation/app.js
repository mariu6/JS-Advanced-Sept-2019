

function validate() {

    document.addEventListener("blur", function (e) {
        if(e.target.value.match(/^[\@\.a-z]+$/gi) === null || (
            e.target.value.match(/@/gi) === null  ||  
        e.target.value.match(/\./gi) === null
        )) {
            e.target.className="error";
        } else {
            e.target.className="";
        }
    }, true);
}