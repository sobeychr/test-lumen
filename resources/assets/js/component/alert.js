const container = $('<div/>').addClass('global-alert-container');

const dismissHtml = $('<button/>').addClass('close').attr({
    'aria-label': 'Close',
    'data-dismiss': 'alert',
    type: 'button',
}).append('<span/>').attr('aria-hidden', 'true').html('&times;');

const refs = {};

const showDelay = 150;
const titleHtml = $('<h4/>').addClass('alert-heading');

/*
export const clearAlert = ref => {
    console.log('clearAlert', {
        ref,
        refs,
    });
    if(refs[ref]) {
        refs[ref].alert('close');
    };
};
*/

const newAlert = ({
    autoDismiss = 3500,
    content,
    dismiss = true,
    level = 'primary',
    ref = false,
    title,
}) => {
    let alert;

    /*
    if(ref) {
        alert = refs[ref];
    }
    if(!alert) {
        alert = $('<div/>');
    }
    */

    alert = $('<div/>')
        .addClass(`alert alert-${level} fade`)
        .empty();

    if(title) {
        alert.append(titleHtml.clone().text(title));
    }

    if(dismiss) {
        alert.append(dismissHtml.clone());

        if(autoDismiss) {
            setTimeout(
                () => alert.alert('close'),
                showDelay + autoDismiss,
            );
        }
    }

    alert.append(content);

    if($('body .global-alert-container').length === 0) {
        $('body').append(container);
    }

    container.append(alert);
    setTimeout(() => alert.addClass('show'), showDelay);
    /*
    if(!ref || !refs[ref]) {
        container.append(alert);
        setTimeout(() => alert.addClass('show'), showDelay);
    }

    if(ref) {
        refs[ref] = alert;
    }
    */
};

export default newAlert;
