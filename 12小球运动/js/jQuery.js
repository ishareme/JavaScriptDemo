/**
 * Created by asus on 2017/7/19.
 */

var div=$('<div></div>')
div.css({
    'width':'100px',
    'height':'100px',
    'border-radius':'50%',
    'position':'absolute',
    'background-color':'red',
    'left':'0px',
    'top':'100px'
})
$('body').append(div)


function init() {
    div.css({
        'left':'0px',
        'top':'200px'
    })
    var x=div.offset().left
    var y=div.offset().top
    var X=$(window).width()
    var Y=$(window).height()
    run(10,20,x,y,X,Y)
}
init()

var time;
var flag=1

function run(numX,numY,x,y,X,Y) {
    time=setInterval(function () {
        x+=numX
        y+=numY
        div.css({
            left:x,
            top:y
        })
        doValidate(x,y,X,Y)
    },50)
}

function doValidate(x,y,X,Y) {
    if (flag){
        if( y >= (Y - div.height()) ){
            clearInterval(time)
            var numY=-20
            var numX=10
            run(numX,numY,x,y,X,Y)
        }
        if ( y <= 0 ){
            clearInterval(time)
            var numY=20
            var numX=10
            run(numX,numY,x,y,X,Y)
        }
        if ( x >= (X - div.width()) ){
            flag=0
        }
        if (x <= 0){
            clearInterval(time)
            var numY=20
            var numX=10
            run(numX,numY,x,y,X,Y)
        }
    }
    else{
        if ( x >= (X - div.width()) ){
            clearInterval(time)
            var numY=20
            var numX=-10
            run(numX,numY,x,y,X,Y)
        }
        if (x <= 0){
            flag=1;
        }
        if( y >= (Y - div.height()) ){
            clearInterval(time)
            var numY=-20
            var numX=-10
            run(numX,numY,x,y,X,Y)
        }
        if ( y <= 0 ){
            clearInterval(time)
            var numY=20
            var numX=-10
            run(numX,numY,x,y,X,Y)
        }

    }

}

// run(10,20)

$(window).resize(function () {
    clearInterval(time)
    init()
})

