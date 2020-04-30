function upper(str) {
    console.log(str.match(/\w+/gim).map(x =>  x.toUpperCase()).join(', '));
}

upper('Hi, how are you?');