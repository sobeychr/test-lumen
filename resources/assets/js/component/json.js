import newAlert, { clearAlert } from './alert';

const alertRef = 'json';

const encode = str => {
    let result;
    try {
        result = JSON.parse(str);
    }
    catch(err) {
        newAlert({
            autoDismiss: false,
            content: `<b>JSON error</b> - ${err}`,
            level: 'warning',
            ref: alertRef,
        });
    }
    if(result) {
        clearAlert(alertRef);
    }
    return result;
}

const minify = str => JSON.stringify(encode(str));

const pretty = str => JSON.stringify(encode(str), null, 4);

export {
    encode,
    minify,
    pretty,
};
