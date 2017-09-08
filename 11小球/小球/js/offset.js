// 定义一个位置对象。
var position = {}
position.top = 100;
position.left = 0;

// 步长 ／／／每一次移动的距离。
var stepLength = 2;
$(function() {
    var maxHeight = $(window).height(); //纵向移动的最大值。
    var directionY = 1  //移动的方向。

    var maxWidth = $(window).width(); //横向移动的最大值
    var directionX = 1;
    
    // 分别设置x和y方向的速度。
    var speedX = stepLength*Math.random();
    var speedY = stepLength*Math.random();

    // 设置offset的时候需要包含一个top和left的对象。
    $('#box').offset(position)

    function move() {
        // 判断一下高度运动的范围
        if(position.top >= (maxHeight-80)) {
            directionY = -1
        }
        if(position.top <= 0) {
            directionY = 1
        }
        // 判断一下宽度运动的范围
         if(position.left >= (maxWidth-80)) {
            directionX = -1
        }
        if(position.left <= 0) {
            directionX = 1
        }
        position.top = position.top + directionY*speedY;
        position.left = position.left + directionX*speedX;

        $('#box').offset(position);
        requestAnimationFrame(move)
    }
    requestAnimationFrame(move)

    // 当窗体改变大小的时候重新设置移动的范围。
    $(window).resize(function(){
        maxHeight = $(window).height()
        maxWidth = $(window).width()
    })
})