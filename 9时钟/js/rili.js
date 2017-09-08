var arrweeks = ['日', '一', '二', '三', '四', '五', '六'];
var div = document.getElementById('box')
// console.log(div)

function setVal(params) {
    var now = new Date(params * 1) //创建一个时间对象。
    // 创建一个标签
    var table = document.createElement('table')
    var th = table.createTHead()  //创建表格标题
    var thRow = th.insertRow()  //在th里面插入tr
    var thCell = thRow.insertCell()  //在tr里面插入td
    thCell.colSpan = 7  //这个属性表示规定单元格可以横跨的列数。
    thCell.innerText = now.getFullYear() + '年' + (now.getMonth() + 1) + '月'

    var td = table.createTBody()  //创建一个tbody标签
    var row = td.insertRow()  //创建一个tr
    row.classList.add('thead')  //给头部添加一个class类
    for (var i = 0; i < 7; i++) {
        var cell = row.insertCell()  //在tr中创建一个列
        cell.innerText = arrweeks[i];
    }


    var monthStart = new Date(now.setDate(1))  //获取当月的1号
    var monthStartweekDay = monthStart.getDay()  //获取1号是星期几
    var dayMonth = new Date(now.setDate(1)) //定义一个日期，计算的时候我们可以使用的值.
    var dayBefore = new Date(now.setDate(-monthStartweekDay)) //当月开始之前的月份信息。   
    var current = globalNow //当前时间

    for (var n = 0; n < 6; n++) {
        var dayRow = td.insertRow()  //添加一行。
        for (var i = 0; i < 7; i++) {
            var dayCell = dayRow.insertCell() //创建一列

            if (dayMonth.getFullYear() == current.getFullYear()
                && dayMonth.getMonth() == current.getMonth()
                && dayMonth.getDate() == current.getDate()) {

                dayCell.classList.add('cur')
            }
            if (monthStartweekDay <= (i + 7 * n)) {
                dayCell.innerText = dayMonth.getDate()
                if (dayMonth.getMonth() != monthStart.getMonth()) {
                    dayCell.style.color = '#999'
                }
                dayMonth.setDate(dayMonth.getDate() + 1)
            }
            else {
                dayBefore.setDate(dayBefore.getDate() + 1)
                dayCell.innerText = dayBefore.getDate()
                dayCell.style.color = '#999'
            }
        }
    }
    div.appendChild(table)  //将table添加到div容器里面
}

// 获取当前的时间作为全局变量，用来存储使用
var globalNow = new Date(); //存储使用。
// 调用函数，在该函数中传入参数。
setVal(globalNow)



// 上一月
function preMonth() {
    div.innerHTML = ""
    // 每个月的开始的时间，设置为1号
    var tem = new Date(globalNow.setMonth(globalNow.getMonth() - 1,1))
    setVal(tem)
}


// 下一月
function nextMonth() {
    div.innerHTML = ""
    var tem = new Date(globalNow.setMonth(globalNow.getMonth() + 1,1))
    setVal(tem)
}