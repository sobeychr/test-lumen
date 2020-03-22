import { get } from './component/ajax';
import { dateTime } from './component/date';
import { smartConvert } from './component/filesize';

(function() {
    const disabled = 'disabled';
    const selItems = '#list .list-group-item:not(.template)';

    const bindEvents = () => {
        $('#folder .dropdown-item').one('click', function() {
            enableButtons(true);
        });

        $('#load').on('click', function() {
            setLoading(true);
            bindList(false);
            $(selItems).remove();

            const folderIndex = $('#folder').attr('data-index');
            get({
                url: `/api/sort/${folderIndex}`,
                done: result => {
                    setLoading(false);

                    const { path: folder, files } = result;
                    files.forEach(entry => createFile({...entry, folder}));

                    bindList(true);
                    $(`${selItems}:first .name`).trigger('click');
                },
            });
        });
    };

    const bindList = (isEnable = true) => {
        if(isEnable) {
            $(`${selItems} .name`).on('click', function() {
                $(`${selItems}.active`).removeClass('active');
                $('#preview img, #preview video')
                    .addClass('hide')
                    .removeAttr('src');

                const $this = $(this);
                const $parent = $this.parent()
                const fullpath = $parent.data('fullpath')
                const selPreview = isVideo(fullpath) ? 'video' : 'img';
                $parent.addClass('active');

                $(`#preview ${selPreview}`)
                    .removeClass('hide')
                    .attr('src', convertFilepath(fullpath));
            });
        }
        else {
            $(selItems).off('click');
        }
    };

    const createFile = ({date, folder, name, size}) => {
        const $html = $('#list .template').clone();
        $html
            .removeClass('template')
            .data('fullpath', folder + name)
            .data('date', date)
            .data('name', name)
            .data('size', size)

        $html.find('.date:first').text(dateTime(date * 1000));
        $html.find('.name:first').text(name);
        $html.find('.size:first').text(smartConvert(size));

        if($('#list').children().length <= 1) {
            $('#list').prepend($html);
        }
        else {
            $('#list').append($html);
        }
    };

    const convertFilepath = fullpath => fullpath.replace(/^E\:\//, 'http://file/');

    const enableButtons = (isEnable = true) => {
        const $enableBtns = $('#folder, #load, #launch');
        if(isEnable) {
            $enableBtns.removeAttr(disabled).removeClass(disabled);
        }
        else {
            $enableBtns.attr(disabled, disabled).addClass(disabled);
        }
    };

    const isVideo = path => /\.(mp4|webm|wmv)$/.test(path);

    const setLoading = isLoading => {
        if(isLoading) {
            $('#modal').modal('show');
            enableButtons(false);
        }
        else {
            $('#modal').modal('hide');
            enableButtons(true);
        }
    };

    $(function() {
        bindEvents();
    });
})();
