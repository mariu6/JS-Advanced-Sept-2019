// class Request {
//     #method ;
//     constructor(method, uri, version, message) {
//         this.#method = method,
//             this["uri"] = uri,      // assign to the local variables
//             this.version = version,
//             this.message = message,
//             this.response = undefined,
//             this.fulfilled = false
//     }
//     get method() {
//         return this.#method;
//     }
// }

// let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '');
// console.log(myData.method);
// myData.method = "POST";   // пробвам да презапиша стойност на прайвът поле
// console.log(myData.method);  // не се презаписва!
// console.log(myData); 


class Request {
    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);