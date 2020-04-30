function encodeAndDecodeMessages() {
    const encodeBtn = document.querySelectorAll('button')[0];
    const decodeBtn = document.querySelectorAll('button')[1];
    const sendArea = encodeBtn.parentNode.querySelector('textarea');
    const receiveArea = decodeBtn.parentNode.querySelector('textarea');
 
    function code(text, factor) {
        return text.split('').map(char => char.charCodeAt() + factor).map(ascii => String.fromCharCode(ascii)).join('');
    }
    function encode() {
        receiveArea.value = code(sendArea.value, 1);
        sendArea.value = '';
    }
    function decode() {
        receiveArea.value = code(receiveArea.value, -1);
    }
    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);
}