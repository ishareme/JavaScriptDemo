/**
 * Created by asus on 2017/7/11.
 */

window.onload=function () {


    var heads=document.querySelectorAll('.head')
    var items=document.querySelectorAll('.item')

    for(var i=0; i<heads.length; i++){
        heads[i].dataset.index=i;
        heads[i].addEventListener('click',function () {
            show(this.dataset.index)
            // showItem(this.dataset.index)
        })
    }


    function show(index) {
        for(var i=0; i<heads.length; i++){
            if (i==index){
                heads[i].classList.add('active');
                heads[i].classList.add('shake');

                items[i].style.display="block";
                items[i].classList.add('bounceIn');

                setTimeout(function () {
                    heads[index].classList.remove('shake');
                    items[index].classList.remove('bounceIn')
                },100)
            }
            else {
                heads[i].classList.remove('active');

                items[i].style.display="none"
            }
        }
    }


};
