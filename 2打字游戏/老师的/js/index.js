/**
 * Created by asus on 2017/7/12.
 */

var arrDazi=[]

//65-91对应的键盘asc编码就是26个英文字母
for(var i=65; i<91; i++){
    //String.fromCharCode()  根据编码获取内容
    arrDazi.push(String.fromCharCode(i))
}

var h=document.getElementById('box')
var indexCode;
var currentCode;
//设置当前的参考变量，进行我们的逻辑判断

function arrDate() {
    indexCode=Math.floor(Math.random()*26)
    currentCode=arrDazi[indexCode];
    h.innerText=currentCode
}

document.body.onkeydown=function () {
    h.classList.remove('wobble');   //删除指定的动画样式
    console.log('down')
}

document.body.onkeyup=function (event) {
    if (event.key.toUpperCase() == currentCode){
        arrDate()
        console.log('up')
        console.log(event.key)
        console.log(currentCode)
    }
    else {
        h.classList.add('animated');
        h.classList.add('wobble');  //添加指定样式
    }
}
arrDate()





//这个地方的代码是没有优化的代码，因为没有把公共部分的代码提取出来放到function
// var indexCode=Math.floor(Math.random()*26)   //获取随机字符
// var currentCode=arrDazi[indexCode];       //设置当前的字母
// var h=document.getElementById('#box')  //获取h1标签
// h.innerText=currentCode;
//
// document.body.onkeyup=function (event) {
//     if (event.key == currentCode){
//         indexCode=Math.floor(Math.random()*26)
//         currentCode=arrDazi[indexCode];
//         h.innerText=currentCode;
//     }
//     else {
//
//     }
// }