/**
 * Created by asus on 2017/7/19.
 */

$(function () {
    $('.first .item>ul>li').click(function () {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')

        $('.item_choose1').text($(this).text())
        $('.item_choose1').parent().css('display','block')

        $('.clearAll').css({
            display:'block',
            border: 'none'
        })
    })

    $('.second .item>ul>li').click(function () {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')

        $('.item_choose2').text($(this).text())
        $('.item_choose2').parent().css('display','block')

        $('.clearAll').css({
            display:'block',
            border: 'none'
        })
    })

    $('.third .item>ul>li').click(function () {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')

        $('.item_choose3').text($(this).text())
        $('.item_choose3').parent().css('display','block')

        $('.clearAll').css({
            display:'block',
            border: 'none'
        })
    })

    $('.four .item>ul>li').click(function () {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')

        $('.item_choose4').text($(this).text())
        $('.item_choose4').parent().css('display','block')

        $('.clearAll').css({
            display:'block',
            border: 'none'
        })
    })

    $('.fifth .item>ul>li').click(function () {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')

        $('.item_choose5').text($(this).text())
        $('.item_choose5').parent().css('display','block')

        $('.clearAll').css({
            display:'block',
            border: 'none'
        })
    })

    $('.clearAll').click(function () {
        $(this).css('display','none').siblings().css('display','none')
        $('.item>ul>li').removeClass('active')
    })

    $('.close').click(function () {
        $(this).parent().css('display','none')
    })
    $('.close').eq(0).click(function () {
        $(this).parent().parent().children().css('display','none')
    })

})