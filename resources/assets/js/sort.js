import { get } from './component/ajax';

(function() {
    const bindEvents = () => {
        $('#folder .dropdown-item').one('click', function() {
            $('#load, #launch').removeAttr('disabled').removeClass('disabled');
        });

        $('#load').on('click', function() {
            setLoading(true);
            const folderIndex = $('#folder').data('index');

            get({
                url: `/api/sort/${folderIndex}`,
                done: () => {
                    setLoading(false);
                },
            });
        });
    };

    const setLoading = isLoading => {
        if(isLoading) {
            $('#modal').addClass('show');
        }
        else {
            $('#modal').removeClass('show');
        }
    };

    $(function() {
        bindEvents();
    });
})();
