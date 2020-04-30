function solve() {
    const db = {  // създаваме си базата данни, в която ще слагаме имената. Тъй като ще са повече от едно, ще пълним масив за всяка буква
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
        G: [],
        H: [],
        I: [],
        J: [],
        K: [],
        L: [],
        M: [],
        N: ['Nixon'],  // по начално условие 
        O: [],
        P: ['Peterson'],    // по начално условие
        Q: [],
        R: [],
        S: [],
        T: [],
        U: [],
        V: [],
        W: [],
        X: [],
        Y: [],
        Z: []
    }

    document.querySelector("#exercise > article > button").addEventListener('click', addToDB);   
    // слушаме за бутона (Call To Action), при натискане добавяме в базата данни

    function addToDB() {        // функция за добавяне в базата данни и ъпдейтване на елемента от HTML-a
        let input = document.querySelector("#exercise > article > input[type=text]").value;   // input ни е текста от инпут полето, взимаме го.value
        let firstLetter = input[0].toUpperCase();                  // първата буква да е винаги главна и си я отделяме, за да сортираме в db
        input = firstLetter + input.slice(1).toLowerCase();        // новия инпут елемент да е с главна и малки букви 
        db[firstLetter].push(input);                              // пушваме в масива по първа буква  

        let listItems = document.querySelectorAll('ol li')       // взимаме си референция към списъка   

        listItems[firstLetter.charCodeAt(0) - 65].textContent = db[firstLetter].join(', ');   // презаписваме във списъка реда с нововъведения елемент 

        //65-90 ASCII за главни букви
        // console.log(db);
        // console.log(listItems[firstLetter.charCodeAt(0) - 64]);
        // console.log(db[firstLetter]);
    }
} 



// function solve() {
//     let list= Array.from(document.getElementsByTagName("li"));
//     let input= document.getElementsByTagName("input")[0];
//     let button= document.querySelector("button");
    
//     let listValues={
//        'A':0,
//        'B':1,
//        'C':2,
//        'D':3,
//        'E':4,
//        'F':5,
//        'G':6,
//        'H':7,
//        'I':8,
//        'J':9,
//        'K':10,
//        'L':11,
//        'M':12,
//        'N':13,
//        'O':14,
//        'P':15,
//        'Q':16,
//        'R':17,
//        'S':18,
//        'T':19,
//        'U':20,
//        'V':21,
//        'W':22,
//        'X':23,
//        'Y':24,
//        'Z':25
//      }
    
//     button.addEventListener('click', (e)=>{
//        let myCurrName= input.value.toString();
//        let firstLetter=myCurrName[0].toUpperCase();
    
//        if(listValues.hasOwnProperty(firstLetter)){
//            let position=listValues[firstLetter];
//            if(list[position].textContent===""){
    
//                list[position].textContent= firstLetter + myCurrName.slice(1);
//            }
//            else{
//                list[position].textContent+= ', ' + firstLetter + myCurrName.slice(1);
//            }
//        }  
//     })
//    }