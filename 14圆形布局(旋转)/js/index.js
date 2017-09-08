/**
 * Created by asus on 2017/7/9.
 */

var cLeft=500   //圆心距离左边的距离
var cTop=200    //圆心距离上部的距离

var cr=200  //小圆半径
var arrDivs=[]  //页面div集合

for(var i=0; i<10; i++){
    var div=document.createElement('div')
    div.style.width=80+"px"
    div.style.height=80+"px"
    div.style.borderRadius="50%"
    div.style.backgroundColor="red"
    div.style.position="absolute"


    //随机计算一下div的位置
    div.style.left=cLeft+cr*Math.cos(2*Math.PI*(i/10))+"px"
    div.style.top=cTop+cr*Math.sin(2*Math.PI*(i/10))+"px"
    div.dataset['radius']=2*Math.PI*(i/10)   //记录每一个小标签的角度
    arrDivs.push(div)
    document.body.appendChild(div)
}

function doRound() {
    arrDivs.forEach(function (item) {
        //每一次时间点在原有的角度上加上一个值
        //PI/180表示1弧度的大小  而1弧度=1度
        var r=1*item.dataset.radius+1*Math.PI/180
        item.dataset.radius=r
        item.style.left=cLeft+cr*Math.cos(r)+"px"
        item.style.top=cTop+cr*Math.sin(r)+"px"
    })
    requestAnimationFrame(doRound)
}
doRound()