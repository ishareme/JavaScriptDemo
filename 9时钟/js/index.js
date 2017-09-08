/**
 * Created by asus on 2017/7/12.
 */

window.onload=function () {

    var main=document.querySelector('.main')

    var R=250;
    var count=60;

    for(var i=0; i<count; i++){

        var line=document.createElement('div')
        line.className="line"
        main.appendChild(line)

        line.style.left=R+(R*Math.cos(i*2*Math.PI/60))+"px"
        line.style.top=R+(R*Math.sin(i*2*Math.PI/60))+"px"
        line.dataset.radius=6*i;
        line.style.transform="rotate("+line.dataset.radius+"deg)"
    }


    var secondDiv=document.querySelector('.second')
    var minuteDiv=document.querySelector('.minute')
    var hourDiv=document.querySelector('.hour')
    var boxDiv=document.querySelector('.box')


    function run() {

        var time=new Date();
        var hour=time.getHours()
        var minute=time.getMinutes()
        var second=time.getSeconds()
        boxDiv.innerText=hour+" : "+minute;

        if (hour>12){
            hour=hour-12;
        }

        secondDiv.style.transform="rotate("+(6*second)+"deg)"
        minuteDiv.style.transform="rotate("+(6*minute)+"deg)"
        hourDiv.style.transform="rotate("+(6*hour)+"deg)"

        if(hour<10){
            hour="0"+hour;
        }
        if(minute<10){
            minute="0"+minute;
        }

    }
    run();
    setInterval(run,1000)
}

