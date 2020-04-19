import newAlert from './component/alert';
import { get, post } from './component/ajax';
import { dateTime } from './component/date';
import { smartConvert } from './component/filesize';

(function() {
    const STATUS_UNSORT = 1;
    const STATUS_EDIT = 2;
    const STATUS_DELETE = 3;

    const disabled = 'disabled';
    const selButtons = '#list .buttons .btn';
    const selItems = '#list .list-group-item:not(.template)';
    const selNames = '#list .input-name';

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
                    if(folder && files) {
                        files.forEach(entry => createFile({...entry, folder}));
                        bindList(true);
                        $(`${selItems}:first .name`).trigger('click');
                    }
                    else {
                        const folderName = $('#folder .title').text();
                        newAlert({
                            autoDismiss: 5000,
                            content: `Unable to load ${folderName}`,
                            level: 'danger',
                            ref: 'sort-load',
                        });
                    }
                },
            });
        });

        $('#launch').on('click', function() {
            const list = [];

            $(selItems).each(function() {
                const $this = $(this);
                const $active = $this.find('.btn.active');

                if($active.length > 0) {
                    const status = $active.hasClass('btn-edit')
                        ? STATUS_EDIT
                        : $active.hasClass('btn-delete')
                            ? STATUS_DELETE
                            : ($this.find('.input-name').val() || STATUS_UNSORT);

                    list.push([
                        $this.attr('data-fullpath'),
                        status,
                    ]);
                }
            });

            if(list.length === 0) {
                newAlert({
                    content: 'Cannot launch empty content',
                    level: 'warning',
                    ref: 'sort-launch',
                });
            }
            else {
                setLoading(true);
                post({
                    url: `/api/sort/launch`,
                    data: { list },
                    done: result => {
                        newAlert({
                            content: 'Completed launch',
                            level: 'info',
                            ref: 'sort-launch',
                        });

                        const { failures, length, successes } = result;

                        if(!successes) {
                            newAlert({
                                content: `Error with ${list.length} items`,
                                level: 'danger',
                            });
                        }
                        else {
                            newAlert({
                                content: `Launched ${successes} items`,
                                level: 'success',
                            });

                            if(failures > 0) {
                                newAlert({
                                    content: `${failures} fails`,
                                    level: 'warning',
                                });
                            }
                        }

                        $('#load').trigger('click');
                    },
                });
            }
        });
    };

    const bindList = (isEnable = true) => {
        if(isEnable) {
            $(`${selItems} .name`).on('click', function(e) {
                e.preventDefault();

                $(`${selItems}.active`).removeClass('active');
                $('#preview img, #preview video')
                    .addClass('hide')
                    .removeAttr('src');

                const $this = $(this);
                const $li = $this.parents('.list-group-item:first');

                const fullpath = $li.attr('data-fullpath');
                const height = $li.attr('data-height');
                const width = $li.attr('data-width');

                const selPreview = isVideo(fullpath) ? 'video' : 'img';
                const path = convertFilepath(fullpath);

                $li.addClass('active');
                $li.find('.input-name:first').focus();

                $('#preview a').attr('href', path)
                $(`#preview ${selPreview}`)
                    .removeClass('hide')
                    .attr('src', path);

                $(`#preview .height`).removeClass('hide').text(height);
                $(`#preview .width`).removeClass('hide').text(width);
            });

            $(selButtons).on('click', function() {
                const $this = $(this);
                const $input = $this.parent().siblings('.input-name');

                $this.parents('.list-group-item:first').find('.name:first').trigger('click');

                $this
                    .addClass('active')
                    .siblings('.active')
                    .removeClass('active');

                if($this.hasClass('btn-edit') || $this.hasClass('btn-delete')) {
                    $input.attr(disabled, disabled);
                }
                else {
                    $input
                        .removeAttr(disabled)
                        .focus();
                }
            });

            $(window).on('keyup', function(e) {
                const { altKey = false, key = '0'} = e;
                const $li = $(`${selItems}.active`);

                if(altKey) {
                    if(key === '1') {
                        $li.find('.btn-name:first').trigger('click');
                        triggerNextList();
                    }
                    else if(key === '2') {
                        $li.find('.btn-edit:first').trigger('click');
                        triggerNextList();
                    }
                    else if(key === '3') {
                        $li.find('.btn-delete:first').trigger('click');
                        triggerNextList();
                    }
                    else if(key === 'ArrowDown') {
                        triggerNextList();
                    }
                    else if(key === 'ArrowUp') {
                        triggerNextList(false);
                    }
                }
                else if(key === 'Enter') {
                    $li.find('.btn-name:first').trigger('click');
                    triggerNextList();
                }
            });
        }
        else {
            $(selItems).off('click');
            $(selButtons).off('click');
            $(window).off('keyup');
        }
    };

    const createFile = ({date, folder, height, name, size, width}) => {
        const $html = $('#list .template').clone();
        $html
            .removeClass('template')
            .attr('data-fullpath', folder + name)
            .attr('data-date', date)
            .attr('data-height', height)
            .attr('data-name', name)
            .attr('data-size', size)
            .attr('data-width', width);

        $html.find('.date:first').text(dateTime(date * 1000));
        $html.find('.name:first').text(name);
        $html.find('.size:first').text(
            `${smartConvert(size)} - ${width} x ${height}`
        );

        $('#list').append($html);
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

    const triggerNextList = (next = true) => {
        const $item = next
            ? $(`${selItems}.active`).next(':not(.template)')
            : $(`${selItems}.active`).prev(':not(.template)');

        if($item.length) {
            $item.find('.name:first').trigger('click');
        }
        else {
            newAlert({
                content: `Reach ${next ? 'end' : 'start'} limit`,
                level: 'warning',
                ref: 'sort-listing',
            });
        }

        /*
        if(!$item.length) {
            $item = next
                ? $(`${selItems}:first`)
                : $(`${selItems}:last`);
        }
        */
    }

    $(function() {
        bindEvents();
    });
})();
