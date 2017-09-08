/**
 * Created by asus on 2017/7/14.
 */

function MyDiv(name,count) {
    this.name=name
    this.count=count
    this.initHTML()
}

MyDiv.prototype.initHTML=function () {
    for(var i=0; i<this.count; i++){
        document.body.innerHTML+=`<div class="${this.name}" ">我是第${i+1}个div</div>`
    }
    this.divs=window.document.querySelectorAll(`.${this.name}`)
    for(var i=0; i<this.count; i++){
        this.divs[i].onclick=this.myOnClick.bind(this.divs[i]);
    }
}

MyDiv.prototype.myOnClick=function () {
    var conf=confirm("确定要删除段落吗？");
    // console.log(confirm.prototype)
    if (conf){
        alert("已删除")
        this.parentNode.removeChild(this)
    }
    console.log(this)
}

new MyDiv("pDiv",10)