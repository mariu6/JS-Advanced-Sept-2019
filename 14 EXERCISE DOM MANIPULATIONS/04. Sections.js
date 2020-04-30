function create(words) {
    for (let word of words){
    
    let div = document.createElement("div")
    let p = document.createElement("p")
    p.textContent = word
    p.style.display = "none"
    div.appendChild(p)
    div.addEventListener("click", reveal)
    function reveal(x){
    p.style.display = "block"
    }
    document.getElementById('content').appendChild(div)
    }
    }