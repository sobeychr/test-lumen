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

    $(function() {
        win.bindInputs();
    });
})(jQuery, window);
