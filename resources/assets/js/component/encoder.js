import { minify, pretty } from './json';
import { charcodeToStr, strToCharcode } from './charcode';

const base64 = (str, encode=true) => encode ? btoa(str) : atob(str);

const charcode = (str, encode=true) => encode ? strToCharcode(str) : charcodeToStr(str);

const jsonencode = (str, encode=true) => encode ? pretty(str) : minify(str);

const urlencode = (str, encode=true) => str;

export {
    base64,
    charcode,
    jsonencode,
    urlencode,
};
