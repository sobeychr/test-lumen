import { time } from './date';

const request = (method, {
    url,
    data,
    done,
    success,
    fail,
}) => {
    console.group('Ajax request', time());
    console.log('method', method);
    console.log('url', url);
    console.log('data', data);
    console.time('Duration');

    $.ajax(url, {
        method,
        data,
        dataType: 'json',
    })
        .done(function(result) {
            console.log('Success', result);
            if(typeof sucess === 'function') {
                success(result);
            }
        })
        .fail(function(result) {
            console.log('Fail', result);
            if(typeof fail === 'function') {
                fail(result);
            }
        })
        .always(function(result) {
            console.timeEnd('Duration');
            console.groupEnd();
            if(typeof done === 'function') {
                done(result);
            }
        });
};

const get = props => request('GET', props);

const post = props => request('POST', props);

export {
    get,
    post,
};
