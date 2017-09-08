/**
 * Created by asus on 2017/7/20.
 */

$(function () {
    $('.item').mouseover(function () {
        $(this).find('.img').css({
            transform: 'rotateX(180deg)',
            transition:'1.5s',
        })
        $(this).find('.word').css({
            transform:'rotateX(0deg)',
            transition:'2s',
        })
    })
    $('.item').mouseout(function () {
        $(this).find('.img').css({
            transform: 'rotateX(0deg)',
            transition:'1.5s',
        })
        $(this).find('.word').css({
            transform:'rotateX(180deg)',
            transition:'2s',
        })
    })


})