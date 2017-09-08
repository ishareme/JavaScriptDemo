/**
 * Created by asus on 2017/7/13.
 */


for(var i=0; i<10; i++){
    document.body.innerHTML+=`<div class="myDiv">我是第${i+1}个div元素</div>`
}

var divs=document.querySelectorAll('.myDiv');

function deleteEle(obj) {
    var conf=confirm("确定要删除段落吗？");
    if (conf){
        alert("已删除")
        obj.parentNode.removeChild(obj)
    }
}

for(var i=0; i<10; i++){
    divs[i].addEventListener('click',function () {
        deleteEle(this)
    })
}
