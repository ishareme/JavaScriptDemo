/**
 * Created by asus on 2017/7/11.
 */

window.onload=function () {

    var words=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]
    var main=document.querySelector('.main');
    var yes=document.querySelector('.yes')
    var no=document.querySelector('.no')
    var rate=document.querySelector('.rate')

    var yesNum=parseInt(yes.innerText);
    var noNum=parseInt(no.innerText);
    var rateNum=parseInt(rate.innerText);

    var i=Math.floor(Math.random()*words.length);
    main.innerText=words[i];


    document.body.addEventListener('keyup',function (event) {

        var word=main.innerText;
        var key=event.key;

        if ( key.toUpperCase() == word ){

            yesNum++;
            yes.innerText=yesNum;
            rateNum=(yesNum/(yesNum+noNum) * 100).toFixed(2);
            rate.innerText=rateNum + '%';

            var index=Math.floor(Math.random()*words.length);
            main.innerText=words[index];

            main.classList.add('bounceIn');


            //要设置一下定时器把添加的class删除掉
            setTimeout(function () {
                main.classList.remove('bounceIn')
            },500)
        }
        else {

            noNum++;
            no.innerText=noNum;
            rateNum=(yesNum/(yesNum+noNum) * 100).toFixed(2);
            rate.innerText=rateNum + '%';

            main.classList.add('error');
            main.classList.add('shake');
            setTimeout(function () {
                main.classList.remove('shake');
                main.classList.remove('error')
            },500)
        }
    })
};