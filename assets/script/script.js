$(function(){
    $('#header .mobile-header .menu-btn button').on('click' , function(){
        let that = $(this);
        let icon = that.find('i');
        $('.mobile-menu').toggleClass('show');
        if($('.mobile-menu').hasClass('show')){
            icon.removeClass('fa-bars');
            icon.addClass('fa-arrow-right');
        }else{
            icon.removeClass('fa-arrow-right');
            icon.addClass('fa-bars');
        }
    });
    
})
