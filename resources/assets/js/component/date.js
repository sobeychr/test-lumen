const leadingZeros = (num, leading=2) => {
    const str = num.toString();
    return '0'.repeat(Math.max(0, leading - str.length)) + str;
};

const convertTs = ts => typeof ts === 'Date' ? ts : new Date(ts);

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

export const time = (ts = now()) => {
    const date = convertTs(ts);
    return [
        leadingZeros(date.getHours()),
        leadingZeros(date.getMinutes()),
        leadingZeros(date.getSeconds()),
    ].join(':');
};
