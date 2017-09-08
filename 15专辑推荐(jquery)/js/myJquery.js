/**
 * Created by asus on 2017/7/20.
 */

$(function () {
    $('.img').mouseover(function () {
        $(this).css({
            'margin-left': '-190px',
            'transition':'1s'
        })
        console.log($(this).css('margin-left'))
    })
    $('.img').mouseout(function () {
        $(this).css({
            marginLeft: '0px',
            'transition':'1s'
        })
    })
})