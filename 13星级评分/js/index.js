/**
 * Created by asus on 2017/7/13.
 */

var img1=document.querySelectorAll('.img1');
var img2=document.querySelectorAll('.img2');
var img3=document.querySelectorAll('.img3');

var img1Span=document.querySelector('.img1Span');
var img2Span=document.querySelector('.img2Span');
var img3Span=document.querySelector('.img3Span');



for(var i=0; i<img1.length; i++){
    img1[i].dataset.index=i;
    img1[i].addEventListener('click',function () {
        action(img1,img1.length,this.dataset.index,img1Span)
    })
}
for(var i=0; i<img2.length; i++){
    img2[i].dataset.index=i;
    img2[i].addEventListener('click',function () {
        action(img2,img2.length,this.dataset.index,img2Span)
    })
}
for(var i=0; i<img3.length; i++){
    img3[i].dataset.index=i;
    img3[i].addEventListener('click',function () {
        action(img3,img3.length,this.dataset.index,img3Span)
    })
}



function action(arr,length,index,span) {
    for(var k=length-1; k>=index; k--){
        arr[k].style.background="url('img/1.png') no-repeat";
        arr[k].style.backgroundSize="contain"
        // console.log(img1[k])
        // console.log(k)
    }
    for(var j=0; j<=index; j++){
        arr[j].style.background="url('img/2.png') no-repeat";
        arr[j].style.backgroundSize="contain";
        span.innerText=(parseInt(index)+1)+" 分";
        console.log(parseInt(index))
    }
}