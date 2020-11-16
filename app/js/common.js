$(function() {

    $(document).on('scroll', function(e) {
        const scrollPos = $(document).scrollTop();
        decoreLineMove('top', scrollPos);
    });
    
});

function decoreLineMove(pos, val) {
    const decorLine = $('.decor-line');
    const decoreNav = $('.nav-decore-inside');
    
    decorLine.css(pos, -1 * (val / 50));
    decoreNav.css(pos, -1 * (val / 10));
}
