function toggleNav(toggleButton, navigation, overlay, body, modal) {
    toggleButton.on('click', function() {
        if ($(this).hasClass('isOpen')) {
            $(this).removeClass('isOpen');
            navigation.removeClass('isOpen');
            if (!modal.hasClass('isOpen')) {
                overlay.removeClass('isOpen');
                body.removeClass('overlay-isOpen');
            }
        }
        else {
            $(this).addClass('isOpen');
            navigation.addClass('isOpen');
            overlay.addClass('isOpen');
            body.addClass('overlay-isOpen');
        }
    });
}


function revealModal(trigger, modal, overlay, body, close, navigation, toggleButton) {
    trigger.on('click', function() {
        if (modal.hasClass('isClosed')) {
            if (navigation.hasClass('isOpen')) {
                navigation.removeClass('isOpen');
                toggleButton.removeClass('isOpen');
            }
            modal.removeClass('isClosed').addClass('isOpen');
            body.addClass('overlay-isOpen');
            overlay.addClass('isOpen');
        }
        else {
            if (navigation.hasClass('isOpen')) {
                navigation.removeClass('isOpen');
                toggleButton.removeClass('isOpen');
            }
            modal.addClass('isOpen');
            body.addClass('overlay-isOpen');
            overlay.addClass('isOpen');
        }
    })
    close.click(function() {
        modal.removeClass('isOpen').addClass('isClosed');
        overlay.removeClass('isOpen');
        body.removeClass('overlay-isOpen');
    });
}

function showBubbles(bubbles) {
    $.each(bubbles, function(i, bubble){
        $(bubble).addClass('isVisible');
    })
}

$( document ).ready(function() {
    const bubbles = $('.js-bubble');
    const modalTrigger = $('.js-trigger-modal');
    const modal = $('.js-modal');
    const overlay = $('.js-navigation-overlay');
    const body = $('body');
    const modalClose = $('.js-modal-close');
    const navigation = $('#js-nav');
    const toggleButton = $('#js-toggle');
    const mq = window.matchMedia( "(min-width: 669px)" );
    if (mq.matches) {
        showBubbles(bubbles);
    }
    revealModal(modalTrigger, modal, overlay, body, modalClose, navigation, toggleButton);
    toggleNav(toggleButton, navigation, overlay, body, modal);
});
