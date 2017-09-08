/**
 * Created by asus on 2017/7/15.
 */

function Alert(arrClass,content) {
    this.arrClass=arrClass
    this.content=content
}

Alert.prototype=Object.create(window.alert.prototype)
console.log(Alert.prototype)