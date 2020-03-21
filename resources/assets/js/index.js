import get from 'lodash/get';

const tt = {
    alpha: {
        test: [
            'dfb',
            'sdfvds',
            'dsfbe',
            'qwqwqw',
            '034n5t3',
        ],
    },
};

console.log('tt', get(tt, 'alpha.test[2]', 'not found'));
