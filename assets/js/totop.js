$(function () {
    var topp;
    $(window).scroll(function () {
        /!*�������������仯ʱִ�еĺ���*!/
        topp = $(window).scrollTop();
        if (topp > 50) {
            $('#toTop').css('opacity', 1)
        }

        if (topp == 0) {
            $('#toTop').fadeTo('slow', 0);
            /*$('#toTop').css('opacity',0);  Ҳ��*/
        }
    });
})