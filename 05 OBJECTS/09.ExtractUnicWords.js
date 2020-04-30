// function extract(data) {
//     // return [...new Set(data
//     // .join("")
//     // .toLowerCase()
//     // .match(/\w+/gim))]
//     // .join(", ")

//     console.log([...new Set(data
//         .join("")
//         .toLowerCase()
//         .match(/\w+/gim))]
//         .join(", "))
// }

// console.log(extract(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.', 
// 'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.', 
// 'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.', 
// 'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.', 
// 'Morbi in ipsum varius, pharetra diam vel, mattis arcu.', 
// 'Integer ac turpis commodo, varius nulla sed, elementum lectus.', 
// 'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']) === "lorem, ipsum, dolor, sit, amet, consectetur, adipiscing, elit, pellentesque, quis, hendrerit, dui, quisque, fringilla, est, urna, vitae, efficitur, vestibulum, diam, dignissim, varius, non, fermentum, felis, ultrices, ex, massa, faucibus, nunc, aliquam, ut, morbi, in, pharetra, vel, mattis, arcu, integer, ac, turpis, commodo, nulla, sed, elementum, lectus, vivamus, malesuada, dapibus, congue, egestas, metus");


// extract(['Interdum et malesuada fames ac ante ipsum primis in faucibus.',
// 'Vestibulum volutpat lacinia blandit.',
// 'Pellentesque dignissim odio in hendrerit lacinia.',
// 'Vivamus placerat porttitor purus nec hendrerit.',
// 'Aliquam erat volutpat. Donec ac augue ligula.',
// 'Praesent venenatis sapien vitae libero ornare, nec pulvinar velit finibus.',
// 'Proin dui neque, rutrum vel dolor ut, placerat blandit sapien.',
// 'Pellentesque at est arcu.',
// 'Nullam eget orci laoreet, feugiat nisi vitae, egestas libero.',
// 'Pellentesque pulvinar aliquet felis.',
// 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
// 'Etiam sit amet nisl ex.',
// 'Sed lacinia pretium metus quis fermentum.',
// 'Praesent a ante suscipit, efficitur risus cursus, scelerisque risus.']);


// function extr(inputArray) {
//     let input = inputArray.join('').split(/(?:,.'| )+/gim);
//     console.log(input);
//     let obj = {};
//     for (let i = 0; i < input.length; i++) {
//         if (!obj.hasOwnProperty(input[i])) {
//             obj[input[i]] = 0;
//         }
//         obj[input[i]]++;
//     }
//     console.log(Object.keys(obj).join(', '));
// }


// extr(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.', 
// 'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.', 
// 'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.', 
// 'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.', 
// 'Morbi in ipsum varius, pharetra diam vel, mattis arcu.', 
// 'Integer ac turpis commodo, varius nulla sed, elementum lectus.', 
// 'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']);


function extract(array) {
    return [... new Set(array.join("").toLowerCase().match(/\w+/gim))].join(", ");
}


console.log(extract(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.', 
'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.', 
'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.', 
'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.', 
'Morbi in ipsum varius, pharetra diam vel, mattis arcu.', 
'Integer ac turpis commodo, varius nulla sed, elementum lectus.', 
'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']) === "lorem, ipsum, dolor, sit, amet, consectetur, adipiscing, elit, pellentesque, quis, hendrerit, dui, quisque, fringilla, est, urna, vitae, efficitur, vestibulum, diam, dignissim, varius, non, fermentum, felis, ultrices, ex, massa, faucibus, nunc, aliquam, ut, morbi, in, pharetra, vel, mattis, arcu, integer, ac, turpis, commodo, nulla, sed, elementum, lectus, vivamus, malesuada, dapibus, congue, egestas, metus");
