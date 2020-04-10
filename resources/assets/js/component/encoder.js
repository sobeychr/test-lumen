import { minify, pretty } from './jsonrich';
import { minify as minifyRich, pretty as prettyRich } from './jsonrich';
import { charcodeToStr, strToCharcode } from './charcode';

const base64 = (str, encode=true) => encode ? btoa(str) : atob(str);

const charcode = (str, encode=true) => encode ? strToCharcode(str) : charcodeToStr(str);

const jsonencode = (str, encode=true) => encode ? pretty(str) : minify(str);

const jsonrichencode = (str, encode=true) => encode ? prettyRich(str) : minifyRich(str);

const urlencode = (str, encode=true) => str;

export {
    base64,
    charcode,
    jsonencode,
    jsonrichencode,
    urlencode,
};
