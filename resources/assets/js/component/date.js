import get from 'lodash/get';

const convertTs = ts => typeof ts === 'Date' ? ts : new Date(ts);

const leadingZeros = (num, leading=2) => {
    const str = num.toString();
    return '0'.repeat(Math.max(0, leading - str.length)) + str;
};

const regexpToNumber = (reg, str) => parseInt(get(reg.exec(str), 1, 0), 10);

export const date = (ts = now()) => {
    const date = convertTs(ts);
    return [
        leadingZeros(date.getFullYear(), 4),
        leadingZeros(date.getMonth()),
        leadingZeros(date.getDate()),
    ].join('-');
};

export const dateTime = (ts = now()) => date(ts) + ' ' + time(ts);

export const now = (asTs = true) => asTs ? Date.now() : convertTs(Date.now());

export const secondsToString = secs => {
    const hours = Math.floor(secs / (60*60));
    const secH = hours * 60 * 60;
    const minutes = Math.floor((secs - hours*60*60) / 60);
    const secM = minutes * 60;
    const seconds = secs - secH - secM;
    return `${hours}h ${minutes}m ${seconds}s`;
};

export const stringToSeconds = str => {
    const hours = regexpToNumber(/(\d)*h/, str);
    const minutes = regexpToNumber(/(\d)*m/, str);
    const seconds = regexpToNumber(/(\d)*s/, str);

    return hours*60*60 + minutes*60 + seconds;
};

export const time = (ts = now()) => {
    const date = convertTs(ts);
    return [
        leadingZeros(date.getHours()),
        leadingZeros(date.getMinutes()),
        leadingZeros(date.getSeconds()),
    ].join(':');
};
