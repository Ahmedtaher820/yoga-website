var miniNav= document.getElementById("mini-nav");
var mainNav= document.getElementById("main-nav");
var brandChar= document.getElementById("brand-char");
    window.addEventListener("scroll",function(){
    miniNav.classList.toggle("active" , window.scrollY > 0);
    mainNav.classList.toggle("active" , window.scrollY > 0);
        if(window.scrollY > 0){
            brandChar.style.color = "white"
        }
        else{
            brandChar.style.color = "#343148"
        }
})
$('.shedule ul li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).data('class') === 'All'){
        $('.classes .col-md-6').css('display','block');
    }
    else{
       $('.classes .col-md-6').css('display','none');
        $($(this).data('class')).parent().css('display','block')
    }
});

