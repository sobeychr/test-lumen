(function($, win) {
    const changes = [
        'input[type="text"]',
        'textarea',
    ];

    win.bindInputs = () => {
        $(changes.join(',')).not('.no-edit').off('change').on('change', function() {
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

    win.inputFilter = () => {
        $('.input-filter[pattern]').off('blur keyup').on('blur keyup', function(e) {
            const $this = $(this);
            const pattern = $this.attr('pattern');
            const val = $this.val().toString();
            // $this.val( val.replace(`/${pattern}/`, '') );
        });
    };

    win.tabSelect = () => {
        $('.nav.nav-pills a').off('click').on('click', function(e) {
            e.preventDefault();
            $(this).tab('show');
        });
    };

    $(function() {
        win.bindInputs();
        win.inputFilter();
        win.tabSelect();
        if(typeof Popper !== 'undefined') {
            win.dropdownSelect();
        }
    });
})(jQuery, window);
