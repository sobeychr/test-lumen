import newAlert from './component/alert';
import * as encoder from './component/encoder';

(function() {
    const bindEvents = () => {
        $('.parser button').on('click', function() {
            const $this = $(this);
            const func = $this.parent('.parser').data('func');
            const isOn = $this.hasClass('on');
            const input = $('#in').val();

            let result;
            if(typeof encoder[func] === 'function') {
                try {
                    result = encoder[func](input, isOn);
                }
                catch(e) {
                    newAlert({
                        content: `Error while executing <b>${func}</b>`,
                        autoDismiss: 1500,
                        level: 'warning',
                    });
                }

                if(result) {
                    newAlert({
                        content: `Completed <b>${func}(${isOn})</b>`,
                        autoDismiss: 1500,
                        level: 'info',
                    });
                }
                else {
                    newAlert({
                        content: `<b>${func}</b> returned empty content`,
                        autoDismiss: 1500,
                        level: 'warning',
                    });
                }

                $('#out').text(result);
            }
            else {
                newAlert({
                    content: `Unable to run function <b>${func}</b>`,
                    level: 'danger',
                });
            }
        });
    };

    $(function() {
        bindEvents();
    });
})();
