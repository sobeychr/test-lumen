const charcodeToStr = str => {
    const result = [];
    const len = str.length;
    let j = 2;
    let c;
    for(let i=0; i<len; i+=j) {
        j = 2;
        c = parseInt(str.substr(i, j), 10);
        if(c > 255) {
            j++;
            c = parseInt(str.substring(i, j), 10);
        }
        result.push(String.fromCharCode(c));
    }
    return result.join('');
};

const strToCharcode = str => str.split('').map(char => char.charCodeAt(0)).join('');

export {
    charcodeToStr,
    strToCharcode,
};
