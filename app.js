var $i = $('#i');
var $window = $(window);
var offset = 50;
var minHeight = 10;

$window.on('scroll resize', grow);

function grow() {
    var scrollPercentage = 100 * $window.scrollTop() / ($('html').height() - $window.height());

    var maxHeight = $(window).height() - (offset * 2) - minHeight;

    var newHeight = ((maxHeight / 100) * scrollPercentage) + minHeight;

    $i.css('height', newHeight);
}
