$(function () {
    var topp;
    $(window).scroll(function () {
        /!*当滚动条发生变化时执行的函数*!/
        topp = $(window).scrollTop();
        if (topp > 50) {
            $('#toTop').css('opacity', 1)
        }

        if (topp == 0) {
            $('#toTop').fadeTo('slow', 0);
            /*$('#toTop').css('opacity',0);  也可*/
        }
    });
})