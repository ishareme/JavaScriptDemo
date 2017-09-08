/**
 * Created by asus on 2017/7/10.
 */

window.onload=function () {

    var boxs=document.getElementsByClassName('box');
    var words=document.getElementsByClassName('words')
    var imgs=document.getElementsByClassName('img')


    for(var i=0; i<boxs.length; i++){
        boxs[i].addEventListener('mouseover',function () {
            this.querySelector('.word').style.display="none"
            this.querySelector('.img').style.transform="scale(1.2)"
            this.querySelector('.img').style.display="block"
        })
    }

    for(var i=0; i<boxs.length; i++){
        boxs[i].addEventListener('mouseout',function () {
            this.querySelector('.word').style.display="block"
            this.querySelector('.img').style.display="none"
        })
    }





    //第二种
    // var imgs=[
    //     "url('http://localhost:63342/名车车标展示(鼠标移入)/img/2.jpg')",
    //     "http://localhost:63342/名车车标展示(鼠标移入)/img/2.jpg",
    //     "http://localhost:63342/名车车标展示(鼠标移入)/img/3.jpg",
    //     "http://localhost:63342/名车车标展示(鼠标移入)/img/4.jpg",
    // ]
    //
    // for(var i=0; i<boxs.length; i++){
    //     boxs[i].setAttribute('index',(i+1).toString());
    //     boxs[i].addEventListener('mouseover',function () {
    //         // this.innerText=''
    //         this.style.transform="scale(1.1)"
    //         this.style.backgroundImage=imgs[(parseInt(this.getAttribute('index'))-1)];
    //         // alert(imgs[parseInt(this.getAttribute('index'))-1])
    //         this.style.backgroundSize="contain"
    //         this.style.zIndex='9999'
    //
    //     })
    // }

    // console.log(boxs);
    // boxs.map(function (ele, index, arr) {
    //     arr[index].addEventListener('mouseover',function () {
    //         this.innerHTML=''
    //         this.style.transform="scale(1.1)"
    //         this.style.background="url("+"../img/"+index+".jpg)"
    //         this.style.backgroundSize="contain"
    //         this.style.zIndex='9999'
    //     })
    // })
}
