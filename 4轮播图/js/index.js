/**
 * Created by asus on 2017/7/10.
 */

window.onload=function () {

    var container=document.querySelector('.container');
    var list=document.querySelector('.list');
    var buttons=document.querySelectorAll(".buttons span");
    var prev=document.querySelector('#prev');
    var next=document.querySelector('#next');
    var index=1;   //index的值表示哪个圆点亮
    var moved=false;   //判断动画是否在动    没在动
    var timer=null;

    //想用addEventListener传参    套用一层function就行
    prev.addEventListener('click',function () {

        if (!moved){
            move(550);
        }

        if (index==1){
            index=5
        }
        else {
            index--;
        }
        showBtn()
    });

    next.addEventListener('click',function () {

        if (!moved){
            move(-550);
        }

        if (index==5){
            index=1
        }
        else {
            index++;
        }
        showBtn()
    });

    function move(left) {

        moved=true;
        var newLeft=parseInt(list.style.left) + left;
        var time=300  //位移总时间
        var inteval=40  //每次位移的间隔时间
        var l=left/(time/inteval)  //l为每次的偏移量

        function go() {
            if ( (l<0 && parseInt(list.style.left)>newLeft) || (l>0 && parseInt(list.style.left)< newLeft) ){
                list.style.left=parseInt(list.style.left) + l  + "px";
                console.log(list.style.left)
                setTimeout(go,inteval)
            }
            else {
                moved=false
                list.style.left=newLeft  + "px";
                // console.log(left)
                if (parseInt(list.style.left) > -550){
                    list.style.left= -2750 + "px"
                }
                else if (parseInt(list.style.left) < -2750){
                    list.style.left= -550 + "px"
                }
            }
        }

        go();

    }

    function play() {
        timer=setInterval(function () {
            if (!moved){
                move(-550);
            }

            if (index==5){
                index=1
            }
            else {
                index++;
            }
            showBtn()
        },2000)
    }

    function stop() {
        clearInterval(timer)
    }

    function showBtn() {
        // buttons[index-1].classList.toggle('on')

        for(var i=0; i<buttons.length; i++){
            if (buttons[i].className=='on'){
                buttons[i].className='';
                break
            }
        }

        buttons[index-1].className="on"

    }


    for(var j=0; j<buttons.length; j++){
        buttons[j].onclick=function () {
            if (this.className == 'on'){
                return;
            }
            var myIndex=parseInt(this.getAttribute('index'));
            var left=-550 * (myIndex-index);
            move(left);
            index=myIndex;
            showBtn()
        }
    }

    play();
    container.addEventListener('mouseout',function () {
        play()
    })
    container.addEventListener('mouseover',function () {
        stop()
    })
};

