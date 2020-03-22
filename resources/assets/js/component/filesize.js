const min = 1.05;
const round = 1000;

const flatten = size => Math.floor(size * round) / round;

export const smartConvert = filesize => {
    const gb = filesize / Math.pow(1024, 3);
    if(gb > min) {
        return flatten(gb) + ' GB';
    }

    const mb = filesize / Math.pow(1024, 2);
    if(mb > min) {
        return flatten(mb) + ' MB';
    }

    const kb = filesize / 1024;
    if(kb > min) {
        return flatten(kb) + ' KB';
    }

    return filesize + ' B';
};
