import newAlert from './component/alert';
import { secondsToString, stringToSeconds } from './component/date';

(function() {
    let increment;
    let initial;
    let timer;

    const bindEvents = () => {
        $('.nav a').on('click', function() {
            clearTimers();
            $('#output').val('');
        });

        $('.timer-forms').on('submit', function(e) {
            e.preventDefault();
        });

        $('#timeout').on('submit', onTimeout);
    };

    const clearTimers = () => {
        increment = 0;
        clearInterval(timer);
    };

    const onTimeout = () => {
        const value = $('#timeout-input').val().toString();
        const seconds = stringToSeconds(value);

        initial = seconds > 0 ? seconds : parseInt(value, 10);
        if(isNaN(initial)) {
            newAlert({
                autoDismiss: 5000,
                content: 'Invalid timer input',
                level: 'warning',
            });
            return;
        }

        clearTimers();
        timer = setInterval(timeoutInterval, 1000);
        timeoutInterval();
    };

    const timeoutInterval = () => {
        increment++;
        const str = secondsToString(initial - increment);
        $('#output').val(str);
    };

    $(function() {
        bindEvents();
    });
})();

