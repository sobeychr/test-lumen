const chars = ['{', '}', '[', ']', ',', ':'];
const charsList = `(${chars.join('|')})`;
const whiteSpaces = '[\\s\\r\\n]*';

const minifyRegexp = new RegExp(`${whiteSpaces}${charsList}${whiteSpaces}`, 'g');
const minify = str => str.replace(minifyRegexp, '$1');

const prettyTab = '    ';
const pretty = str => {
    let tabs = 0;
    const newStr = minify(str)
        .replace(/(\:\{|\:\[)/g, '$1\n')
        .replace(/(\}\,|\]\,)/g, '\n$1')
        .replace(/\,/g, ',\n')
        .replace(/\:/g, ': ')
        .replace(/(\{|\}|\[|\]){2}/g, '$1\n$1')
        .replace(/(\{|\}|\[|\]){2}/g, '$1\n$1')
        .replace(/(\{|\])(\'|\"|\d|\w)/, '$1\n$2');

    return newStr.split('\n').map(line => {
        if(/(\}|\])\,?$/.test(line)) {
            tabs--;
            if(tabs < 0) {
                tabs = 0;
            }
        }
        const newLine = prettyTab.repeat(tabs) + line;
        if(line.endsWith('{') || line.endsWith('[')) {
            tabs++;
        }
        return newLine;
    }).join('\n');
};

export {
    minify,
    pretty,
};
