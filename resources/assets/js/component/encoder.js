import { minify, pretty } from './json';

const base64 = (str, encode=true) => encode ? btoa(str) : atob(str);

const charcode = (str, encode=true) => str;

const jsonencode = (str, encode=true) => encode ? pretty(str) : minify(str);

const urlencode = (str, encode=true) => str;

export {
    base64,
    charcode,
    jsonencode,
    urlencode,
};
