/**
 * Created by asus on 2017/7/11.
 */

window.onload=function () {

    var words=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]
    var main1=document.querySelector('.main1');
    var main2=document.querySelector('.main2');
    var yes=document.querySelector('.yes')
    var no=document.querySelector('.no')
    var rate=document.querySelector('.rate')

    var yesNum=parseInt(yes.innerText);
    var noNum=parseInt(no.innerText);
    var rateNum=parseInt(rate.innerText);

    var i=Math.floor(Math.random()*words.length);
    var j=Math.floor(Math.random()*words.length);
    main1.innerText=words[i];
    main2.innerText=words[j];

    var arr=[]


    document.body.addEventListener('keyup',function (event) {

        var word1=main1.innerText;
        var word2=main2.innerText;

        var key=event.key.toUpperCase();

        arr.push(key)

         if ( arr.indexOf(word1) > -1 ){

            if ( arr.indexOf(word2) > -1 || ((arr.indexOf(word1) < arr.indexOf(word2)) || (arr.indexOf(word1) == arr.indexOf(word2)) ) ){
                yesNum++;
                yes.innerText=yesNum;
                rateNum=(yesNum/(yesNum+noNum) * 100).toFixed(2);
                rate.innerText=rateNum + '%';

                var index1=Math.floor(Math.random()*words.length);
                main1.innerText=words[index1];
                var index2=Math.floor(Math.random()*words.length);
                main2.innerText=words[index2];

                main1.classList.add('bounceIn');
                main2.classList.add('bounceIn');

                //要设置一下定时器把添加的class删除掉
                setTimeout(function () {
                    main1.classList.remove('bounceIn')
                    main2.classList.remove('bounceIn')
                },500)

                arr=[]
            }
            // else {
            //     noNum++;
            //     no.innerText=noNum;
            //     rateNum=(yesNum/(yesNum+noNum) * 100).toFixed(2);
            //     rate.innerText=rateNum + '%';
            // }
        }
        else {

            noNum++;
            no.innerText=noNum;
            rateNum=(yesNum/(yesNum+noNum) * 100).toFixed(2);
            rate.innerText=rateNum + '%';

            main1.classList.add('error');
            main1.classList.add('shake');
            setTimeout(function () {
                main1.classList.remove('shake');
                main1.classList.remove('error')
            },500)

             arr=[]
        }
        console.log(arr)
    })
};