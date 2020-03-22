(function($, win) {
    const changes = [
        'input[type="text"]',
        'textarea',
    ];

    win.bindInputs = () => {
        $(changes.join(',')).off('change').on('change', function() {
            const $this = $(this);
            if($this.val() !== $this.data('value')) {
                $this.addClass('edited');
            }
            else {
                $this.removeClass('edited');
            }
        });
    };

    win.dropdownSelect = () => {
        $('.dropdown .dropdown-item').off('click').on('click', function() {
            const $this = $(this);
            $this.parents('.dropdown:first')
                .attr('data-index', $this.data('index'))
                .find('.title:first').text($this.text());
        });
    };

    $(function() {
        win.bindInputs();
        if(typeof Popper !== 'undefined') {
            win.dropdownSelect();
        }
    });
})(jQuery, window);
