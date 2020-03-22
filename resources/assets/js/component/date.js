const leadingZeros = (num, leading=2) => {
    const str = num.toString();
    return ''.repeat(Math.max(0, leading - str.length)) + str;
};

export const date = (date = now(false)) => [
    leadingZeros(date.getFullYear(), 4),
    leadingZeros(date.getMonth()),
    leadingZeros(date.getDate()),
].join('-');

export const dateTime = () => date() + ' ' + time();

export const now = (asTimestamp = true) => {
    const ts = Date.now();
    return asTimestamp ? ts : new Date(ts);
};

export const time = (date = now(false)) => [
    leadingZeros(date.getHours()),
    leadingZeros(date.getMinutes()),
    leadingZeros(date.getSeconds()),
].join(':');
