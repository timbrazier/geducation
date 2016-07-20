$(function () {

    var scrollTo = function (id) {
        $('html, body').animate({ scrollTop: $(id).offset().top -50}, 1200, 'easeOutExpo');
    };

    $("#navigation a, #introduction a").click(function (evt) {
        var targetId = $(evt.currentTarget).attr('href');
        scrollTo(targetId);
        return false;
    });

});